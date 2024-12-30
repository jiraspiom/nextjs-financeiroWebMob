import Link from 'next/link'
import LoginComponente from './loginComponente'

export default function Page() {
  return (
    <div>
      <LoginComponente />
      <Link href="/auth/signup">Sing in</Link>
    </div>
  )
}
