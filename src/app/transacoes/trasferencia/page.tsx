import DropDownButton from '@/components/DropdownButton'
import TabelaTransferencia from '@/components/TabelaTransferencia'

const itens = [
  {
    id: 121,
    status: 1,
    data: '25/50/5555',
    observacao: 'primeira',
    de: 'corrent',
    para: 'nu',
    valor: '2000',
  },
  {
    id: 232,
    status: 2,
    data: '25/07/2023',
    observacao: 'segunda',
    de: 'nu',
    para: 'itau',
    valor: '201',
  },
]
export default function Transferencias() {
  return (
    <div className="bg-blue-400">
      <DropDownButton name="Transferências" color="bg-blue-600" link="#" />
      <TabelaTransferencia itens={itens} />
    </div>
  )
}
