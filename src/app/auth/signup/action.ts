'use client'

import { verifyEmailInput } from '@/lib/email'
import type { ActionResult } from 'next/dist/server/app-render/types'

export async function signupAction(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  //   const response = await fetch('/api/auth/signup', {
  //     method: 'POST',
  //     body: formData,
  //   })

  const email = formData.get('email')
  const username = formData.get('name')
  const password = formData.get('password')

  if (
    typeof email !== 'string' ||
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return { message: 'campos invalidos' }
  }

  if (email === '' || username === '' || password === '')
    return { message: 'preencha nome, usuario ou senha' }

  if (verifyEmailInput(email)) return { message: 'email invalido' }

  console.log(name, email, password)

  if (username === 'gilmar borges') {
    return { ok: 'cadastrado com sucesso' }
    // return { redirect: '/auth/login' }
  }

  return { data: { message: 'erro no cadastro' } }
}
