interface ButtonProps {
  title: string
  saldoatual: string
  saldoprevisto: string
}
export default function CardConta(props: ButtonProps) {
  return (
    <div className="m-2 rounded bg-slate-800">
      <div className="m-2 text-white">
        <div>
          {props.title} {'...'}{' '}
        </div>
        <div>Saldo atual RS {props.saldoatual} </div>
        <div>Saldo previsto RS {props.saldoprevisto} </div>
      </div>
    </div>
  )
}
