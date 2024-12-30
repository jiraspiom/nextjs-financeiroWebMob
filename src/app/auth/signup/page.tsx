import Link from 'next/link'
import SignupComponente from './signupComponente'

export default function Page() {
  return (
    <div>
      <SignupComponente />
      <Link href="/auth/login">Sing in</Link>
    </div>
  )
}
