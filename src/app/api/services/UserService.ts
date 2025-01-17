import type { PrismaClient } from '@prisma/client'
import type { IUser } from '../entities/User'

export class UserService implements IUserService {
  private readonly prisma: PrismaClient

  constructor(repository: PrismaClient) {
    this.prisma = repository
  }
  async create(userData: IUser): Promise<IUser> {
    return await this.prisma.user.create({ data: userData })
  }

  async getAll(): Promise<IUser[]> {
    return await this.prisma.user.findMany()
  }

  async getById(id: number): Promise<IUser | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })
    return user
  }

  async update(id: number, userData: Partial<IUser>): Promise<IUser> {
    const user = await this.prisma.user.update({
      where: { id },
      data: userData,
    })
    return user
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } })
  }
}

export interface IUserService {
  create(userData: IUser): Promise<IUser>
  getAll(): Promise<IUser[]>
  getById(id: number): Promise<IUser | null>
  update(id: number, userData: Partial<IUser>): Promise<IUser>
  delete(id: number): Promise<void>
}
