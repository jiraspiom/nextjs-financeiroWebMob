import type { IUser } from '../entities/User'
import { db as prisma } from '@/lib/db'

export class UserRepository implements IUserRepository {
  async create(userData: IUser): Promise<IUser> {
    return await prisma.user.create({ data: userData })
  }

  async getAll(): Promise<IUser[]> {
    return await prisma.user.findMany()
  }

  async getById(id: number): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return user
  }

  async update(id: number, userData: Partial<IUser>): Promise<IUser> {
    const user = await prisma.user.update({
      where: { id },
      data: userData,
    })
    return user
  }

  async delete(id: number): Promise<void> {
    await prisma.user.delete({ where: { id } })
  }
}

export interface IUserRepository {
  create(userData: IUser): Promise<IUser>
  getAll(): Promise<IUser[]>
  getById(id: number): Promise<IUser | null>
  update(id: number, userData: Partial<IUser>): Promise<IUser>
  delete(id: number): Promise<void>
}
