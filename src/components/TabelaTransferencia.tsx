import Deletar from './Icons/Delete'
import Editar from './Icons/Edit'

type Item = {
  id: number
  data: string
  observacao: string
  de: string
  para: string
  valor: string
}
type ItensProps = {
  itens: Item[]
}

export default function TabelaTransferencia({ itens }: ItensProps) {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Observacao
              </th>
              <th scope="col" className="px-6 py-3">
                De
              </th>
              <th scope="col" className="px-6 py-3">
                Para
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
                key={iten.id}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="px-6 py-4">{iten.data}</td>
                <td className="px-6 py-4">{iten.observacao}</td>
                <td className="px-6 py-4">{iten.de}</td>
                <td className="px-6 py-4">{iten.para}</td>
                <td className="px-6 py-4">{iten.valor}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end">
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
