interface ButtonProps {
  title: string
}
export default function CardDashBaordBalancoMensal(props: ButtonProps) {
  return (
    <div className="m-2 w-1/2">
      <h1 className="bg-slate-800 text-white p-2">{props.title}</h1>
      <div className="rounded-none bg-slate-900">
        <div className="p-2">
          <div className="m-2 text-white">Receita RS 1.000,00</div>
          <div className="m-2 text-white">Despesas RS 10,00</div>
          <div className="m-2 text-white">Balanco RS 990,00</div>
        </div>
      </div>
    </div>
  )
}
