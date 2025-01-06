'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { signIn } from '@/auth'

export default function LoginComponente() {
  //   const [state, action] = useActionState(loginAction, undefined)

  const credentialsAction = async (formData: FormData) => {
    console.log('fo', formData.get('email'))
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
    })
  }

  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle>cria uma conta</CardTitle>
      </CardHeader>
      <form action={credentialsAction}>
        <CardContent>
          <Label>Email</Label>
          <Input type="email" id="credentials-email" name="email" />
          <Label>Senha</Label>
          <Input type="password" id="credentials-password" name="password" />
        </CardContent>
        {/* <p>{state?.message}</p>
        <p>{state?.ok}</p> */}
        <CardFooter className="flex justify-end">
          <Button type="submit">Login</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
