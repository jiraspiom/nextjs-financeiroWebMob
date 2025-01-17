import type { IUser } from '../entities/User'
import type { UserRepository } from '../repositories/UserRepository'

export class UserService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async createUser(user: IUser) {
    return this.userRepository.create(user)
  }

  async getAllUsers() {
    return this.userRepository.getAll()
  }

  async getUserById(id: number) {
    return this.userRepository.getById(id)
  }

  async updateUser(id: number, user: IUser) {
    return this.userRepository.update(id, user)
  }

  async deleteUser(id: number) {
    return this.userRepository.delete(id)
  }
}
