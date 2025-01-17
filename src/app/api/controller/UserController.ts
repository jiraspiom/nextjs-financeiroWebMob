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
  private route = new Hono()
  private readonly userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
    this.route.post('/', this.createUser)
    this.route.get('/', this.getAllUsers)
    this.route.get('/:id', this.getUserById)
    this.route.put('/:id', this.updateUser)
    this.route.put('/:id', this.deleteUser)
  }

  async createUser(c: Context) {
    const body = await c.req.json<UserInput>()
    const result = UserSchema.safeParse(body)
    if (!result.success) {
      return c.json({ error: 'Dados inválidos' }, 400)
    }

    const user = await this.userService.create(result.data)

    return c.json(user, 201)
  }

  async getAllUsers(c: Context) {
    const users = await this.userService.getAll()

    return c.json(users)
  }

  async getUserById(c: Context) {
    const id = c.req.param('id')

    const user = await this.userService.getById(Number(id))

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

    const user = await this.userService.update(Number(id), result.data)

    return c.json(user)
  }

  async deleteUser(c: Context) {
    const id = c.req.param('id')

    await this.userService.delete(Number(id))

    return c.json({ message: 'Usuário deletado com sucesso' })
  }

  get router() {
    return this.route
  }
}
