import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import CardConta from '@/components/CardConta'
import CardDashboard from '@/components/CardDashboard'
import { GetConta } from '../_action/contaAction'

// type Conta = {
//   id: number
//   nome: string
//   tipo: string
//   saldoAtual: number
//   saldoPrevisto: number
// }

export default async function Contas() {
  const contas = await GetConta()

  const saldoAtualTotal = contas.reduce(
    (total, conta) => total + conta.saldoAtual,
    0
  )
  const saldoPrevistoTotal = contas.reduce(
    (total, conta) => total + conta.saldoPrevisto,
    0
  )

  return (
    <>
      <div className="m-2">
        {/* <Link
          href="/contas/adicionar"
          className="justify-normal rounded-full bg-green-600 p-2 hover:bg-green-500"
        >
          Nova Conta
        </Link> */}
        <Link
          href="/contas/adicionar"
          className={buttonVariants({ variant: 'default' })}
        >
          Nova Conta
        </Link>
      </div>
      <div className="flex">
        {/* conteiner da esquerda */}
        <div className="flex">
          {contas.map(item => (
            <div key={item.id}>
              <CardConta
                title={item.nome}
                saldoatual={String(item.saldoAtual)}
                saldoprevisto={String(item.saldoPrevisto)}
              />
            </div>
          ))}
        </div>

        {/* conteiner da direita */}
        <div className="flex flex-col gap-4">
          <CardDashboard title="Saldo Atual" valor={String(saldoAtualTotal)} />
          <CardDashboard
            title="Saldo previsto"
            valor={String(saldoPrevistoTotal)}
          />
        </div>
      </div>
    </>
  )
}
