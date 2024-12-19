import CardConta from '@/components/CardConta'
import CardDashboard from '@/components/CardDashboard'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Contas() {
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
          <CardConta
            title="Carteira pessoal"
            saldoatual="990"
            saldoprevisto="990,00"
          />
          <CardConta
            title="Descricao da conta"
            saldoatual="100,00"
            saldoprevisto="100,00"
          />
          <CardConta
            title="Conta itau"
            saldoatual="990,00"
            saldoprevisto="990,00"
          />
        </div>

        {/* conteiner da direita */}
        <div className="flex flex-col gap-4">
          <CardDashboard title="Saldo Atual" valor="1.090,00" />
          <CardDashboard title="Saldo previsto" valor="1.090,00" />
        </div>
      </div>
    </>
  )
}
