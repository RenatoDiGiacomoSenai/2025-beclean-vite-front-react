import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TextInput, Button } from '@istic-ui/react'
import { createRoute, Link } from '@tanstack/react-router'
import { LOGIN_PAGE_ROUTE } from '@shared/authentication/pages'
import { useAuth } from '@shared/authentication/context'
import logo from '@assets/login-logo.svg'

import TokenInsert from '../TokenInsert'
import { PrivateRoutes, PublicRoutes } from '@shared/layouts'

const ForgetFormSchema = z.object({
  email: z.string().min(1, 'Campo Obrigatório').email('E-mail inválido'),
})

type ForgetFormType = z.infer<typeof ForgetFormSchema>

function SendEmail() {
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
    <div className="w-full md:w-[608px] rounded-md bg-white p-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-4">
            <span className="flex flex-col">
              <img src={logo} width={164} alt="" />
            </span>

            <span className="flex flex-col">
              <h4 className=" text-title-h4">Esqueceu a senha?</h4>
              <p className="text-md text-grey-700">
                Por favor, insira o e-mail cadastrado na plataforma para receber
                o código de alteração de senha
              </p>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <TextInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              error={{ description: errors.email?.message }}
              {...register('email')}
            />

            <Button
              style={{ backgroundColor: '#212529' }}
              label="Enviar"
              
            />
            <Link to={TOKEN_INSERT_PAGE_ROUTE}>Teste</Link>
          </div>
          
          <div className="flex flex-col gap-4 text-center">
            <span className="mr-2 flex items-center justify-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <Link to={LOGIN_PAGE_ROUTE} className="text-black font-bold">
                Voltar ao login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SendEmail

export const TOKEN_INSERT_PAGE_ROUTE = '/token-insert'

export const TokenInsertRoute = createRoute({
  path: TOKEN_INSERT_PAGE_ROUTE,
  getParentRoute: () => PublicRoutes,
  component: TokenInsert,
})
