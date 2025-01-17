import { Hono, type Context } from 'hono'

import { z } from 'zod'
import type { UserService } from '../services/UserService'

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
  private readonly userRouter: Hono
  private readonly service: UserService

  constructor(userService: UserService) {
    this.service = userService
    this.userRouter = new Hono()
    this.setupRoutes()
  }

  private setupRoutes(): void {
    this.userRouter.post('/', this.createUserController)
    this.userRouter.get('/', this.getAllUsersController)
    this.userRouter.get('/:id', this.getUserByIdController)
    this.userRouter.put('/:id', this.updateUserController)
    this.userRouter.delete('/:id', this.deleteUserController)
  }

  async createUserController(c: Context) {
    const body = await c.req.json<UserInput>()

    const result = UserSchema.safeParse(body)

    if (!result.success) {
      return c.json({ error: 'Dados inválidos' }, 400)
    }

    const user = await this.service.createUserService(result.data)

    return c.json(user, 201)
  }

  async getAllUsersController(c: Context) {
    const users = await this.service.getAllUsersService()

    return c.json(users)
  }

  async getUserByIdController(c: Context) {
    const id = c.req.param('id')

    const user = await this.service.getUserByIdService(Number(id))

    if (!user) {
      return c.json({ error: 'Usuário não encontrado' }, 400)
    }

    return c.json(user)
  }

  async updateUserController(c: Context) {
    const id = c.req.param('id')
    const body = c.req.json<UserUpdateInput>()

    const result = UserSchema.safeParse(body)

    if (!result.success) {
      return c.json({ error: 'Dados inválidos' }, 400)
    }

    const user = await this.service.updateUserService(Number(id), result.data)

    return c.json(user)
  }

  async deleteUserController(c: Context) {
    const id = c.req.param('id')

    await this.service.deleteUserService(Number(id))

    return c.json({ message: 'Usuário deletado com sucesso' })
  }

  public getRouter(): Hono {
    return this.userRouter
  }
}
