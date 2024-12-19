import DropDownButton from '@/components/DropdownButton'
import TabelaTransacao from '@/components/TabelaTransacao'

const itens = [
  {
    id: 121,
    status: 1,
    data: '25/50/5555',
    descricao: 'primeita dddddd',
    categoria: 'Transferencia',
    conta: 'Carteira',
    valor: '2000',
  },
  {
    id: 232,
    status: 2,
    data: '25/07/2023',
    descricao: 'primeita',
    categoria: 'Transferencia',
    conta: 'Bradesco',
    valor: '201',
  },
  {
    id: 235,
    status: 4,
    data: '25/07/2023',
    descricao: 'primeita bbbb',
    categoria: 'Pagamento',
    conta: 'Itau',
    valor: '334',
  },
]

export default function Transacoes() {
  return (
    <div className="bg-purple-400">
      <DropDownButton name="Transações" color="bg-purple-600" link="#" />

      <TabelaTransacao itens={itens} />
    </div>
  )
}
