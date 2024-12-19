import { Button } from './ui/button'

interface ButtonProps {
  title: string
}
export default function CardDashboardCartaoCredido(props: ButtonProps) {
  return (
    <div className="m-2 w-1/2">
      <h1 className="bg-slate-800 text-white p-2">{props.title}</h1>
      <div className="bg-slate-900 ">
        <div className="">
          {/* <Button className="m-2 mb-2 mr-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Fatura abertas
          </Button>
          <Button className="m-2 mb-2 mr-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Fatura fechada
          </Button> */}
          <div className="flex gap-4 p-4">
            <Button>Faturas abertas</Button>
            <Button>Faturas fechada</Button>
          </div>

          <div className="p-4">
            <div className="text-white">Nome do cartão itau</div>
            <div className="h-2.5 w-full rounded-none bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2.5 rounded-none bg-blue-600"
                style={{ width: '15%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
