import DropDownButton from '@/components/DropdownButton'
import TabelaTransacaoReceita from '@/components/TabelaTransacaoDespesa'

const itens = [
  {
    id: 121,
    status: 1,
    data: '25/50/5555',
    descricao: 'recebimneto',
    categoria: 'Salario',
    conta: 'Carteira',
    valor: '2000',
  },

  {
    id: 235,
    status: 4,
    data: '25/07/2023',
    descricao: 'comissao',
    categoria: 'Divida',
    conta: 'Itau',
    valor: '500',
  },
]
export default function Receitas() {
  return (
    <div className=" bg-green-400">
      <DropDownButton name="Receitas" color="bg-green-600" link="#" />

      <div className="flex bg-slate-500 p-4">
        <div>
          <div className="mr-1  p-1">
            <TabelaTransacaoReceita itens={itens} />
          </div>
        </div>

        <div className="space-y-2 p-1">
          <div className="rounded-lg bg-slate-700 p-4 text-slate-200 shadow-lg">
            Pendente: 500
          </div>
          <div className="rounded-lg bg-slate-700 p-4 text-slate-200 shadow-lg">
            Efetuada: 2000
          </div>
          <div className=" rounded-lg bg-slate-700 p-4 text-slate-200 shadow-lg">
            Total: 2500
          </div>
        </div>
      </div>
    </div>
  )
}
