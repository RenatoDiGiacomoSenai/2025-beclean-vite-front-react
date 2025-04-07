import { Button, TextInput } from '@istic-ui/react'
import { createRoute, Link } from '@tanstack/react-router'
import { PublicRoutes } from '@shared/layouts'
import logo from '@assets/login-logo.svg'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { useAuth } from '@shared/authentication/context'
import { useContext } from 'react'
import { ToastContext } from '@shared/context'
import { router } from '@settings/tanstack-router'

const ForgetFormSchema = z
  .object({
    password: z.string().min(8, 'Senha precisa ter pelo menos 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'Senha precisa ter pelo menos 8 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type ForgetFormType = z.infer<typeof ForgetFormSchema>

function ChangePassword() {
  const { showToast } = useContext(ToastContext)
  const { changePassword } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetFormType>({
    resolver: zodResolver(ForgetFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: ForgetFormType) => {
    changePassword &&
      changePassword(localStorage.getItem('token') || '', data.password)
        .then(() => {
          localStorage.removeItem('token')
          showToast({
            type: 'success',
            message: 'Token inserido com sucesso',
          })
          router.navigate({ to: '/' })
        })
        .catch((error) => {
          showToast({
            type: 'error',
            title: 'Algo deu errado',
            message: 'Volte a tela de login e solicite novamente',
          })

          if (error.response.status === 400) {
            localStorage.removeItem('token')
          }

          console.error(error)
        })
  }

  return (
    <div className="w-full md:w-[608px] p-12">
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
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-black text-white bg-black text-bold">
                &#x2713;
              </div>

              <div>Código de Verificação</div>
            </div>
            <span className="flex items-center gap-2 text-gray-500 text-bold">
              -
            </span>
            <div className="flex items-center gap-2">
              <div className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-black text-white bg-black text-bold">
                &#x2713;
              </div>

              <div>Crie sua Nova Senha</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Senha"
                  placeholder="Digite sua senha"
                  type="password"
                  error={
                    errors.password && {
                      description: errors.password.message,
                    }
                  }
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Senha Repetido"
                  placeholder="Repita sua senha"
                  type="password"
                  error={
                    errors.confirmPassword && {
                      description: errors.confirmPassword.message,
                    }
                  }
                />
              )}
            />

            <Button
              style={{ backgroundColor: '#212529' }}
              label="Enviar"
              type="submit"
            />
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
              <Link to={'/'} className="text-black font-bold">
                Voltar ao login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword

export const PW_RESET_PAGE_ROUTE = '/token-reset'

export const ResetPasswordRoute = createRoute({
  path: PW_RESET_PAGE_ROUTE,
  getParentRoute: () => PublicRoutes,
  component: ChangePassword,
})
