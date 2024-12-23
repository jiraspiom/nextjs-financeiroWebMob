import getReceita from '@/app/actions/receita'
import CardTransacao from '@/components/CardTransacao'
import DialogDespesa from '@/components/DialogDespesa'
import DropDownButton from '@/components/DropdownButton'
import TabelaTransacaoDR from '@/components/TabelaTransacaoDR'

export default async function Receitas() {
  const itensReceita = await getReceita()

  const result = itensReceita.reduce(
    (acc, item) => {
      const value = item.valor

      if (item.status === 0) {
        acc.valorPendente += value
      }
      if (item.status === 1) {
        acc.valorPago += value
      }
      acc.total += value
      return acc
    },

    { valorPendente: 0, valorPago: 0, total: 0 }
  )

  return (
    <div>
      <div className="flex justify-between bg-green-400">
        <DropDownButton name="Receitas" color="bg-green-600" link="#" />
        <div className="p-4">
          <DialogDespesa />
        </div>
      </div>

      <div className="flex gap-4 bg-slate-500">
        <TabelaTransacaoDR itens={itensReceita} />

        <div>
          <CardTransacao
            title="Receita pendente"
            valor={String(result.valorPendente)}
          />
          <CardTransacao
            title="Receita paga"
            valor={String(result.valorPago)}
          />
          <CardTransacao title="Total" valor={String(result.total)} />
        </div>
      </div>
    </div>
  )
}
