'use server'

import { db as prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function criarConta(data: FormData): Promise<void> {
  try {
    // Extrai os dados do FormData
    const saldoInicialRaw = data.get('saldo_inicial')
    const descricaoRaw = data.get('descricao')

    // Valida se os campos existem
    if (!saldoInicialRaw || !descricaoRaw) {
      throw new Error('Os campos saldo inicial e descrição são obrigatórios.')
    }

    // Converte os valores para os tipos corretos
    const saldoInicial = Number(saldoInicialRaw.toString())
    const descricao = descricaoRaw.toString().trim()

    // Valida os tipos
    if (saldoInicial || saldoInicial < 0) {
      throw new Error(
        'Saldo inicial deve ser um número válido maior ou igual a zero.'
      )
    }

    // Cria a nova conta no banco de dados
    const novaConta = await prisma.conta.create({
      data: {
        nome: descricao,
        saldoAtual: saldoInicial,
        saldoPrevisto: saldoInicial,
      },
    })

    console.log('Conta criada com sucesso:', novaConta)

    // Revalida a página para refletir as mudanças
    revalidatePath('/contas')
  } catch (error) {
    console.error('Erro ao criar conta:', error)
    throw new Error('Erro ao criar conta. Tente novamente.')
  }
}

export async function GetConta() {
  try {
    const contas = await prisma.conta.findMany()

    return contas
  } catch (error) {
    console.error('Erro ao criar conta:', error)
    throw new Error('Erro ao criar conta. Tente novamente.')
  }
}
