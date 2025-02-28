import React from 'react'
import { Button, TextInput } from '@istic-ui/react'
import { createRoute, Link } from '@tanstack/react-router'
import { PublicRoutes } from '@shared/layouts'
import logo from '@assets/login-logo.svg'

function ChangePassword() {
  return (
    <div className="w-full md:w-[608px] p-12">
      <form>
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
              <div className="w-10 aspect-square rounded-full flex items-center justify-center border-2 border-gray-400 ">
                2
              </div>
              <div>Crie sua Nova Senha</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
            />
            <TextInput
              label="Senha Repetido"
              placeholder="Repita sua senha"
              type="password"
            />
            <Button style={{ backgroundColor: '#212529' }} label="Enviar" />
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
