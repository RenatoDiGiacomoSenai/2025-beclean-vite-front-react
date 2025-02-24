import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TextInput, Button } from '@istic-ui/react'
import { Link } from '@tanstack/react-router'
import { LOGIN_PAGE_ROUTE } from '@shared/authentication/pages'
import { useAuth } from '@shared/authentication/context'

const ForgetFormSchema = z.object({
  email: z.string().min(1, 'Campo Obrigatório').email('E-mail inválido'),
})

type ForgetFormType = z.infer<typeof ForgetFormSchema>

function ForgetForm() {
  const { recovery } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetFormType>({
    resolver: zodResolver(ForgetFormSchema),
  })

  const onSubmit = (data: ForgetFormType) => {
    recovery && recovery(data.email)
  }

  return (
    <div className="w-full md:w-[608px] rounded-md bg-white p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl text-brand-500">Esqueci minha senha</h2>
          <p className="text-md text-muted">
            Informe o e-mail cadastrado para recuperar sua senha
          </p>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            error={{ description: errors.email?.message }}
            {...register('email')}
          />

          <Button label="Recuperar Senha" />

          <Link to={LOGIN_PAGE_ROUTE} className="text-brand-500 font-bold">
            Voltar para o login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgetForm
