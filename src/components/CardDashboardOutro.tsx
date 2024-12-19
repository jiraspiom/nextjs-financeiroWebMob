interface ButtonProps {
  title: string
}
export default function CardDashboardOutro(props: ButtonProps) {
  return (
    <div className="m-2 w-1/2">
      <h1 className="bg-slate-800 text-white p-2">{props.title}</h1>
      <div className="rounded-none bg-slate-900">
        <div className="">
          <div className="p-4 text-white">descricao</div>

          <div className="p-4">
            <div className="h-2.5 w-full rounded-none bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2.5 rounded-none bg-blue-600"
                style={{ width: '45%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
