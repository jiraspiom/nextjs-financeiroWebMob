import CardDashBaordBalancoMensal from '@/components/CardDashBaordBalancoMensal'
import CardDashboard from '@/components/CardDashboard'
import CardDashboardCartaoCredido from '@/components/CardDashboardCartaoCredido'
import CardDashboardOutro from '@/components/CardDashboardOutro'

export default function Home() {
  return (
    <div>
      <h1 className="bg-slate-800 text-white p-2">Dashboard</h1>
      <div className="w-1/2 flex flex-row flex-wrap gap-4 m-2 justify-between">
        <CardDashboard title="Saldo atual" valor="1.090.00" />
        <CardDashboard title="Receita" valor="1.000,00" />
        <CardDashboard title="Despesa" valor="10,00" />
        <CardDashboard title="Cartão de crédito" valor="0,00" />
      </div>
      <CardDashboardOutro title="Despesa por categoria" />
      <CardDashboardOutro title="Receita por categoria" />
      <CardDashBaordBalancoMensal title="Balanco mensal" />
      <CardDashboardCartaoCredido title="Cartões de crédito" />
    </div>
  )
}
