import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@shared/authentication/context'
import logo from '@assets/login-logo.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@istic-ui/react'
import CharInput from '@shared/components/TokenInput'
import { Link } from '@tanstack/react-router'
import { z } from 'zod'
import { router } from '@settings/tanstack-router'
import { ToastContext } from '@shared/context'

const ForgetFormSchema = z.object({
  inputToken: z.string().min(4, 'Campo Obrigatório'),
})

export type ForgetFormType = z.infer<typeof ForgetFormSchema>

function TokenInsert() {
  // const router = useRouter()
  const { showToast } = useContext(ToastContext)
  const { insertToken, recovery } = useAuth()
  const [counter, setCounter] = useState(20)
  const [disabled, setDisabled] = useState(true)

  const {
    
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ForgetFormType>({
    resolver: zodResolver(ForgetFormSchema),
  })

  const onSubmit = (data: ForgetFormType) => {
    console.warn(data.inputToken)
    insertToken &&
      insertToken(data.inputToken)
        .then(() => {
          console.warn('Token inserido com sucesso')
          showToast({
            type: 'success',
            message: 'Token inserido com sucesso',
          })
          localStorage.setItem('token', data.inputToken)
          router.navigate({ to: '/token-reset' })
        })
        .catch((error) => {
          showToast({
            type: 'error',
            title: 'Algo deu errado',
            message: error.message,
          })
          console.warn('Algo deu errado')
          console.error(error)
        })
  }


  useEffect(() => {
    if (counter <= 0) {
      setDisabled(false) // Habilita o botão quando o contador chega a zero

      return
    }

    const time = setInterval(() => {
      setCounter((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(time) // Limpa o intervalo corretamente
  }, [counter]) // Só roda quando `counter` muda

  return (
    <div className="w-full md:w-[608px]  p-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <span className="flex flex-col">
            <img src={logo} width={164} alt="" />
          </span>

          <span className="flex flex-col gap-8">
            <h4 className=" text-title-h4">Recuperação de Senha</h4>
            {/*Separar para component */}
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-gray-900">
                  1
                </div>
                <div>Código de Verificação</div>
              </div>
              <span className="flex items-center gap-2 text-gray-500 text-bold">
                -
              </span>
              <div className="flex items-center gap-2">
                <div className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-gray-300 bg-gray-300 ">
                  2
                </div>
                <div>Crie sua Nova Senha</div>
              </div>
            </div>
            {/*Separar para component */}
            <span>
              <h4 className="text-title-h4 text-b">Verifique seu e-mail</h4>
              <p className="text-md text-grey-700">
                Digite o código de 4 dígitos enviado para o e-mail
                <br />
                <span className="text-black font-bold">
                  {'meuemail@email.com'}
                </span>
              </p>
            </span>
            <span className="flex-col gap-3">
              <CharInput setValue={setValue} fieldName="inputToken" />
              {errors.inputToken && (
                <span className="text-red-500">
                  {'Insira ou Cole os 4 número acima'}
                </span>
              )}
            </span>
            <span className="flex flex-col justify-center gap-4">
              <Button
                type="submit"
                label="Confirmar código"
                style={{ backgroundColor: '#212529' }}
              />
              <Button
                type="button"
                onClick={() => {
                  const email = localStorage.getItem('email')

                  if (email) {
                    recovery && recovery(email)
                    showToast({
                      type: 'success',
                      title: 'E-mail enviado com sucesso',
                      message: 'Verifique seu E-mail, Pode estar em SPAM',
                    })
                    setCounter(20) // Reseta o contador
                    setDisabled(true) // Desativa o botão novamente
                  }
                }}
                disabled={disabled}
                variant="outline"
                label={`(${counter}) Reenviar código`}
                style={{
                  border: '1px solid black',
                  color: disabled ? 'darkgrey' : 'black',
                  backgroundColor: disabled ? 'lightgrey' : 'white',
                }}
              />
            </span>
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
          </span>
        </div>
      </form>
    </div>
  )
}

export default TokenInsert
