'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// https://www.youtube.com/watch?v=XSbMSSdGSdg

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty('nome é obrigatório')
    .transform(name => {
      return name
        .trim()
        .split(' ')
        .map(word => {
          return word[0].toUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('formato de e-mail inválido')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('@gmail.com')
    }, 'o email precisa ser da google'),
  password: z.string().min(6, 'a senha precisa de no mínimo 6 caracteres'),
})

type CreateUserFormData = z.infer<typeof createUserSchema>

// inicio do formulario
export default function Formulario() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  })

  console.log('erros', errors)

  function createUser(data: CreateUserFormData) {
    console.log(data)

    setOutput(JSON.stringify(data, null, 2))

    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(createUser)}
          className="grap-4 flex w-full max-w-xs flex-col rounded-none bg-slate-800 p-4"
        >
          <div className="mb-6 mt-2 flex flex-col gap-1">
            {/* <label htmlFor="">Nome:</label> */}
            <Input
              type="name"
              placeholder="o nome aqui"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          <div className="mb-6 flex flex-col gap-1">
            {/* <label htmlFor="">Email:</label> */}
            <Input
              type="email"
              placeholder="email@gmail.com"
              {...register('email')}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <Input
              type="password"
              placeholder="******"
              {...register('password')}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <Button type="submit">LOGIN</Button>
          <pre>{output}</pre>
        </form>
      </main>
    </>
  )
}
