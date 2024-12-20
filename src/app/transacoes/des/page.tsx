import DialogDespesa from '@/components/DialogDespesa'
import DropDownButton from '@/components/DropdownButton'
import TabelaTransacao from '@/components/TabelaTransacao'

const itens = [
  {
    id: 121,
    status: 1,
    data: '25/50/5555',
    descricao: 'primeita',
    categoria: 'Pagamento',
    conta: 'Carteira',
    valor: '2000',
  },
  {
    id: 232,
    status: 2,
    data: '25/07/2023',
    descricao: 'primeita',
    categoria: 'Pagamento',
    conta: 'Bradesco',
    valor: '201',
  },
  {
    id: 235,
    status: 4,
    data: '25/07/2023',
    descricao: 'primeita',
    categoria: 'Pagamento',
    conta: 'Itau',
    valor: '334',
  },
]

export default function Despesas() {
  return (
    <div className="">
      <div className="flex justify-between bg-red-400">
        <DropDownButton name="Despesas" color="bg-red-600" link="#" />
        <div className="p-4">
          <DialogDespesa />
        </div>
      </div>
      <TabelaTransacao itens={itens} />
    </div>
  )
}
