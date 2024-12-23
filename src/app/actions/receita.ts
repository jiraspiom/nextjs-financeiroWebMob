import { db as prisma } from '@/lib/db'

export default async function getReceita() {
  const receitas = await prisma.receita.findMany({
    select: {
      id: true,
      data: true,
      descricao: true,
      categoria: true,
      conta: { select: { nome: true } },
      valor: true,
      status: true,
    },
  })
  return receitas
}
