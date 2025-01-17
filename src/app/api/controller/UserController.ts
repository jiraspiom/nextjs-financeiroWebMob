import { Hono, type Context } from 'hono'
import type { UserService } from '../services/UserService'
import { z } from 'zod'

interface UserInput {
  name: string
  email: string
}

interface UserUpdateInput {
  nome?: string
  email?: string
}

const UserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})

export class UserController {
  private userRouter: Hono
  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
    this.userRouter = new Hono()
    this.setupRoutes()
  }

  private setupRoutes(): void {
    this.userRouter.post('/', this.createUser)
    this.userRouter.get('/', this.getAllUsers)
    this.userRouter.get('/:id', this.getUserById)
    this.userRouter.put('/:id', this.updateUser)
    this.userRouter.delete('/:id', this.deleteUser)
  }

  async createUser(c: Context) {
    console.log('object')
    const body = await c.req.json<UserInput>()
    console.log('ccc', body)

    const result = UserSchema.safeParse(body)

    if (!result.success) {
      return c.json({ error: 'Dados inválidos' }, 400)
    }

    const user = await this.userService.createUser(result.data)

    return c.json(user, 201)
  }

  async getAllUsers(c: Context) {
    const users = await this.userService.getAllUsers()

    return c.json(users)
  }

  async getUserById(c: Context) {
    const id = c.req.param('id')

    const user = await this.userService.getUserById(Number(id))

    if (!user) {
      return c.json({ error: 'Usuário não encontrado' }, 400)
    }

    return c.json(user)
  }

  async updateUser(c: Context) {
    const id = c.req.param('id')
    const body = c.req.json<UserUpdateInput>()

    const result = UserSchema.safeParse(body)

    if (!result.success) {
      return c.json({ error: 'Dados inválidos' }, 400)
    }

    const user = await this.userService.updateUser(Number(id), result.data)

    return c.json(user)
  }

  async deleteUser(c: Context) {
    const id = c.req.param('id')

    await this.userService.deleteUser(Number(id))

    return c.json({ message: 'Usuário deletado com sucesso' })
  }

  public getRouter(): Hono {
    return this.userRouter
  }
}
