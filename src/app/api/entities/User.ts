export class User {
  id: number
  nome: string
  email: string

  constructor(id: number, nome: string, email: string) {
    this.id = id
    this.nome = nome
    this.email = email
  }
}

export interface IUser {
  id?: number
  name: string
  email: string
}
