interface ButtonProps {
  title: string
  valor: string
}

export default function CardDashboard(props: ButtonProps) {
  return (
    <div className="rounded-none bg-slate-800 text-white">
      <div className="m-2">
        <div>
          {props.title} {'>'}
        </div>
        <div>RS {props.valor} </div>
      </div>
    </div>
  )
}
