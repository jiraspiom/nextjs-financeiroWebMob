'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AdicionarConta() {
  const enviar = (formData: FormData) => {
    const nome = formData.get('saldo_inicial')
    const inst = formData.get('instituicao')
    const desc = formData.get('descricao')
    const ctip = formData.get('contatipo')
    const tela = formData.get('telainicial')
    console.log('formData', nome, inst, desc, ctip, tela)
  }

  return (
    <>
      <h1>Nova conta</h1>
      <div className="flex">
        {/* conteiner da  */}
        <form action={enviar}>
          <div className="flex flex-col">
            <div>
              <input
                type="text"
                name="saldo_inicial"
                id="saldo_inicial"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="RS 0,00"
                required
              />
            </div>

            <label htmlFor="">Instituicao financeiras</label>

            <select
              id="small"
              name="instituicao"
              className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Selecione uma instituicao financeiras </option>
              <option value="itau">Itau</option>
              <option value="bradesco">Bradesco</option>
              <option value="nu">Nu</option>
              <option value="outros">Outros</option>
            </select>

            <div>
              <input
                type="text"
                id="descricao"
                name="descricao"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Descricao"
                required
              />
            </div>

            <select
              id="small"
              name="contatipo"
              className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="1">Conta corrente</option>
              <option value="2">Dinheiro</option>
              <option value="3">Poupanca</option>
              <option value="4">Investimento</option>
              <option value="5">Outros</option>
            </select>

            <label htmlFor="">Cor da conta</label>
            <div className="flex flex-row">
              <span className="m-2 flex h-3 w-3 rounded-full bg-gray-200" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-blue-600" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-green-500" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-red-500" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-purple-500" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-indigo-500" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-yellow-300" />
              <span className="m-2 flex h-3 w-3 rounded-full bg-teal-500" />
            </div>

            <div className="flex">
              <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Incluir na soma da tela inicial
              </span>
              <Label className="relative inline-flex cursor-pointer items-center">
                <Input
                  type="checkbox"
                  name="telainicial"
                  value=""
                  className="peer sr-only"
                  checked={true}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
              </Label>

              {/* <Checkbox /> */}
            </div>

            {/* <button
            type="button"
            className="mb-2 mr-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Salvar
          </button> */}
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    </>
  )
}
