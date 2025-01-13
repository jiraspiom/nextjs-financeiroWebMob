export function getDespesaJson() {
  return [
    {
      id: 11,
      status: 0,
      data: '05/01/2025',
      descricao: 'padaria',
      categoria: 'Alimentacao',
      conta: 'Carteira',
      valor: '30',
    },
    {
      id: 12,
      status: 1,
      data: '05/01/2025',
      descricao: 'padaria',
      categoria: 'Alimentacao',
      conta: 'Carteira',
      valor: '5',
    },
    {
      id: 13,
      status: 1,
      data: '05/01/2025',
      descricao: 'energia',
      categoria: 'Casa',
      conta: 'Itau',
      valor: '300',
    },
    {
      id: 14,
      status: 1,
      data: '03/01/2025',
      descricao: 'Restaurante menstral',
      categoria: 'Alimentacao',
      conta: 'Carteira',
      valor: '45',
    },
  ]
}
export function getReceitaJson() {
  return [
    {
      id: 1,
      status: 1,
      data: '01/01/2025',
      descricao: 'salario novembro',
      categoria: 'Salario',
      conta: 'Itau',
      valor: '4000',
    },

    {
      id: 2,
      status: 0,
      data: '10/01/2025',
      descricao: 'comissao',
      categoria: 'Bonificacao',
      conta: 'Itau',
      valor: '500',
    },
  ]
}

export function getTransferencia() {
  return [
    {
      id: 121,
      status: 1,
      data: '10/01/2025',
      observacao: 'primeira',
      de: 'nubanco',
      para: 'itauu',
      valor: '100',
    },
    {
      id: 122,
      status: 1,
      data: '10/01/2025',
      observacao: 'segunda',
      de: 'Carteira',
      para: 'nubanco',
      valor: '50',
    },
  ]
}

export function getContas() {
  return [
    {
      id: 1,
      nome: 'Carteira',
      tipo: 'dinheiro',
      saldoAtual: 0,
      saldoPrevisto: 0,
    },
    {
      id: 2,
      nome: 'c_nubanck',
      tipo: 'corrente',
      saldoAtual: 500,
      saldoPrevisto: 500,
    },
    {
      id: 3,
      nome: 'c_itau',
      tipo: 'corrente',
      saldoAtual: 1000,
      saldoPrevisto: 1000,
    },
  ]
}

const users = [
  {
    id: '1',
    nome: 'Usuario Um',
    email: 'usuario1@email.com',
    password: '123123',
  },
  {
    id: '1',
    nome: 'Usuario Dois',
    email: 'usuario2@email.com',
    password: '123123',
  },
  {
    id: '1',
    nome: 'Usuario Tres',
    email: 'usuario3@email.com',
    password: '123123',
  },
]

export function getUserById(id: string) {
  const user = users.find(user => user.id === String(id))

  if (!user) return null

  return user
}

export function getUserByEmail(email: string) {
  const user = users.find(user => user.email === String(email))

  if (!user) return null

  return user
}

export function verifyPasswordHash(email: string, password: string) {
  const user = users.find(user => user.email === String(email))

  if (!user) return null

  if (password === user.password) {
    return user
  }

  return null
}

export async function getUserFromDb(email: string, password: string) {
  const user = users.find(
    user => user.email === String(email) && user.password === String(password)
  )

  if (!user) return null

  // if (password === user.password) {
  //   return user
  // }

  return user
}
