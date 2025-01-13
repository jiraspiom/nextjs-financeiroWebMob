import DropDownButton from '@/components/DropdownButton'
import TabelaTransacao from '@/components/TabelaTransacao'
import getDespesa from '../actions/despesa'
import getReceita from '../actions/receita'

export default async function Transacoes() {
  const despesas = await getDespesa()
  const receitas = await getReceita()

  const transacoes = [
    ...despesas.map(despesa => ({
      id: despesa.id,
      data: despesa.data,
      tipo: 'despesa',
      descricao: despesa.descricao,
      categoria: despesa.categoria,
      conta: despesa.conta.nome,
      valor: -despesa.valor,
      status: despesa.status,
    })),
    ...receitas.map(receita => ({
      id: receita.id,
      data: receita.data,
      tipo: 'receita',
      descricao: receita.descricao,
      categoria: receita.categoria,
      conta: receita.conta.nome,
      valor: receita.valor,
      status: receita.status,
    })),
  ]

  const transacoesby = transacoes.sort(
    (a, b) => new Date(a.data).getTime() + new Date(b.data).getTime()
  )

  return (
    <div>
      <div className="flex justify-between bg-purple-400">
        <DropDownButton name="Transações" color="bg-purple-600" link="#" />
      </div>

      <div className="flex gap-4 bg-slate-500">
        <TabelaTransacao itens={transacoesby} />
      </div>
    </div>
  )
}
