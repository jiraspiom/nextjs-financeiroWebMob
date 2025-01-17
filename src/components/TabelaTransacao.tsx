import Confirmar from './Icons/Confirm'
import Deletar from './Icons/Delete'
import Editar from './Icons/Edit'
import Ok from './Icons/Ok'
import Snake from './Icons/Snake'

type Item = {
  id: number
  data: Date
  tipo: string
  descricao: string | null
  categoria: string
  conta: string
  valor: number
  status: number
}

type ItensProps = {
  itens: Item[]
}

export default function TabelaTransacao({ itens }: ItensProps) {
  return (
    <div className="w-1/2">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Situação
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Descricao
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Conta
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3 ">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {itens.map(iten => (
              <tr
                key={`${iten.id} ${iten.tipo}`}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="px-6 py-4">
                  {iten.status === 1 ? <Ok /> : <Snake />}
                </td>
                <td className="px-6 py-4">
                  {Intl.DateTimeFormat('pt-BR').format(iten.data)}
                </td>
                <td className="px-6 py-4">{iten.descricao}</td>
                <td className="px-6 py-4">{iten.categoria}</td>
                <td className="px-6 py-4">{iten.conta}</td>
                <td
                  className={`px-6 py-4 ${iten.valor < 0 ? 'text-red-500' : ''} `}
                >
                  {iten.valor}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    {iten.status !== 1 && (
                      <div className="mr-2">
                        <Confirmar />
                      </div>
                    )}
                    <div className="mr-2">
                      <Editar />
                    </div>
                    <div className="mr-10">
                      <Deletar />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
