import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import { UserService } from '../services/UserService'
import { PrismaClient } from '@prisma/client'
import { UserController } from '../controller/UserController'

export const runtime = 'edge'

const app = new Hono().basePath('/api')
const prisma = new PrismaClient()
const userService = new UserService(prisma)
const userController = new UserController(userService)

app.get('/hello', c => {
  return c.json({
    message: 'Hello from Hono!',
  })
})

app.route('/users', userController.router)

export const GET = handle(app)
