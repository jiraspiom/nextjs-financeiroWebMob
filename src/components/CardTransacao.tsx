interface CardProps {
  title: string
  valor: string
}

export default function CardTransacao(props: CardProps) {
  return (
    <div className="rounded-none bg-slate-800 text-white w-48">
      <div className="m-2 ">
        <div className="flex flex-col justify-between ">
          {props.title} {'>'}
        </div>
        <div>RS {props.valor} </div>
      </div>
    </div>
  )
}
