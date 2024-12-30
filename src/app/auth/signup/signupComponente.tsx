'use client'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { signupAction } from './action'
import { useActionState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import { useRouter } from 'next/navigation'

export default function SignupComponente() {
  // const router = useRouter()
  const [state, action] = useActionState(signupAction, undefined)

  if (state?.redirect) {
    // router.push('/auth/login')
  }
  console.log('data', state)
  return (
    <>
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>cria uma conta</CardTitle>
        </CardHeader>
        <form action={action}>
          <CardContent>
            <Label>Nome</Label>
            <Input type="text" name="name" />

            <Label>Email</Label>
            <Input type="email" name="email" />

            <Label>Senha</Label>
            <Input type="password" name="password" />
          </CardContent>
          <p>{state?.data?.message}</p>
          <p>{state?.ok}</p>
          <CardFooter className="flex justify-end">
            <Button type="submit">Cadastrar</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}
