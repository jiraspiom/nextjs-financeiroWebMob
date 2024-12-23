import CardTransacao from '@/components/CardTransacao'
import DialogDespesa from '@/components/DialogDespesa'
import DropDownButton from '@/components/DropdownButton'
import TabelaTransferencia from '@/components/TabelaTransferencia'
import { getTransferencia } from '@/lib/dados'

export default function Transferencias() {
  const tranferencia = getTransferencia()

  return (
    <div>
      <div className="flex justify-between bg-blue-400">
        <DropDownButton name="Transferências" color="bg-blue-600" link="#" />
        <div className="p-4">
          <DialogDespesa />
        </div>
      </div>

      <div className="flex gap-4 bg-slate-500">
        <TabelaTransferencia itens={tranferencia} />
        <div>
          <CardTransacao title="Saldo atual" valor="3650,00" />
          <CardTransacao title="Receitas" valor="4500,00" />
          <CardTransacao title="Despesas" valor="380,00" />
          <CardTransacao title="Balanco mensal" valor="4120,00" />
        </div>
      </div>
    </div>
  )
}
