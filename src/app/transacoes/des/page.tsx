import getDespesa from '@/app/actions/despesa'
import CardTransacao from '@/components/CardTransacao'
import DialogDespesa from '@/components/DialogDespesa'
import DropDownButton from '@/components/DropdownButton'
import TabelaTransacaoDR from '@/components/TabelaTransacaoDR'

export default async function Despesas() {
  const itensDespesa = await getDespesa()

  const result = itensDespesa.reduce(
    (acc, item) => {
      const value = item.valor

      if (item.status === 0) {
        acc.statusPendente += value
      }
      if (item.status === 1) {
        acc.statusPago += value
      }
      acc.total += value
      return acc
    },
    { statusPendente: 0, statusPago: 0, total: 0 }
  )

  return (
    <div>
      <div className="flex justify-between bg-red-400">
        <DropDownButton name="Despesas" color="bg-red-600" link="#" />

        <div className="p-4">
          <DialogDespesa />
        </div>
      </div>
      <div className="flex gap-4 bg-slate-500">
        <TabelaTransacaoDR itens={itensDespesa} />
        <div>
          <CardTransacao
            title="Despesa pendente"
            valor={String(result.statusPendente)}
          />
          <CardTransacao
            title="Despesa paga"
            valor={String(result.statusPago)}
          />
          <CardTransacao title="Total" valor={String(result.total)} />
        </div>
      </div>
    </div>
  )
}
