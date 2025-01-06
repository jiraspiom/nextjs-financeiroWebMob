'use server'
import { auth } from '@/auth'

export default async function Usuario() {
  const session = await auth()
  return <div>{session?.user?.email}</div>
}
