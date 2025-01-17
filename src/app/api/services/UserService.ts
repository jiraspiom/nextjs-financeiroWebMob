import type { IUser } from '../entities/User'
import type { UserRepository } from '../repositories/UserRepository'

export class UserService {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async createUserService(user: IUser) {
    return this.userRepository.create(user)
  }

  async getAllUsersService() {
    return this.userRepository.getAll()
  }

  async getUserByIdService(id: number) {
    return this.userRepository.getById(id)
  }

  async updateUserService(id: number, user: IUser) {
    return this.userRepository.update(id, user)
  }

  async deleteUserService(id: number) {
    return this.userRepository.delete(id)
  }
}
