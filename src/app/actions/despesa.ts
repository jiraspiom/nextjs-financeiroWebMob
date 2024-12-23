import { db as prisma } from '@/lib/db'

export default async function getDespesa() {
  const despesas = await prisma.despesa.findMany({
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
  return despesas
}
