import { signIn } from '@/auth'
import { getUserByEmail, verifyPasswordHash } from '@/lib/dados'
import { verifyEmailInput } from '@/lib/email'
import type { ActionResult } from 'next/dist/server/app-render/types'

export async function loginAction(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get('email')
  const password = formData.get('password')

  if (typeof email !== 'string' || typeof password !== 'string') {
    return { message: 'campos invalidos' }
  }

  if (email === '' || password === '') {
    return {
      message: 'Please enter your email and password.',
    }
  }

  if (!verifyEmailInput(email)) {
    return {
      message: 'Invalid email',
    }
  }

  const user = getUserByEmail(email)

  if (user === null) {
    return { message: 'conta nao existe' }
  }

  const validPassword = verifyPasswordHash(user.email, password)

  if (validPassword === null) {
    return { message: 'usuario ou senha invalidos' }
  }

  await signIn('credentials', formData)

  return {
    ok: 'login feito com sucesso...',
  }
}
