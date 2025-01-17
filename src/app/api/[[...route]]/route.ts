import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { UserRepository } from '../repositories/UserRepository'
import { UserService } from '../services/UserService'
import { UserController } from '../controller/UserController'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

app.get('/hello', c => {
  return c.json({
    message: 'Hello from Hono!',
  })
})

app.route('/users', userController.getRouter())

// export default handle(app)
export const GET = handle(app)
export const POST = handle(app)
