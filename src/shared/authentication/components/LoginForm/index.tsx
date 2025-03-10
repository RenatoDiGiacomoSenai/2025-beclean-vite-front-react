import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TextInput, PasswordInput, Button } from '@istic-ui/react'
import { Link } from '@tanstack/react-router'
import {
  FORGET_PAGE_ROUTE,
  PRIVACY_PAGE_ROUTE,
} from '@shared/authentication/pages'
import { useAuth } from '@shared/authentication/context'
import logo from '@assets/login-logo.svg'

const LoginFormSchema = z.object({
  email: z.string().min(1, 'Campo Obrigatório').email('E-mail inválido'),
  password: z.string().min(4, 'A senha deve ter no mínimo 4 caracteres'),
})

type LoginFormType = z.infer<typeof LoginFormSchema>

function LoginForm() {
  const { signIn, loading, error } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit = async (data: LoginFormType) => {
    const { email, password } = data

    signIn && (await signIn(email, password))
  }

  return (
    <div className="w-full md:w-[608px] p-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <span className="flex flex-col">
            <img src={logo} width={150} alt="" />
          </span>
          <span className="flex flex-col pb-4">
            <h4 className=" text-title-h4">Pureza que transforma</h4>
            <p className="text-md text-grey-700">
              Para ter acesso a plataforma entre com as suas credencias
            </p>
          </span>
          <span className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                error={{ description: errors.email?.message }}
                {...register('email')}
              />
              <PasswordInput
                label="Senha"
                placeholder="Digite sua senha"
                error={{ description: errors.password?.message }}
                {...register('password')}
              />
            </div>
            <Button
              label="Login"
              isLoading={loading}
              style={{ backgroundColor: '#212529' }}
            />
            {error && <p className="text-red-500">{error}</p>}
          </span>
          <span className="flex flex-col gap-6">
            <Link
              to={FORGET_PAGE_ROUTE}
              className="text-neutral-900 font-bold text-center"
            >
              Esqueceu a senha?
            </Link>

            <p className="text-muted" style={{ display: 'none' }}>
              {/* hidden Aguardando Se vai existir essa sessão*/}
              Ao acessar e utilizar a plataforma, você concorda com com nossa{' '}
              <Link
                to={PRIVACY_PAGE_ROUTE}
                className="text-brand-500 font-bold"
              >
                política de privacidade
              </Link>
            </p>
          </span>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
