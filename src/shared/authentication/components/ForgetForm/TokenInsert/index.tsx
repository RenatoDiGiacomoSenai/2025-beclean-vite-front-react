import logo from '@assets/login-logo.svg'
import { Button } from '@istic-ui/react'
import CharInput from '@shared/components/TokenInput'
import { Link } from '@tanstack/react-router'

function TokenInsert() {
  return (
    <div className="w-full md:w-[608px]  p-12">
      <form>
        <div className="flex flex-col gap-6">
          <span className="flex flex-col">
            <img src={logo} width={164} alt="" />
          </span>

          <span className="flex flex-col gap-8">
            <h4 className=" text-title-h4">Recuperação de Senha</h4>
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
            <span className="flex gap-3">
              <CharInput />
              <CharInput />
              <CharInput />
              <CharInput />
            </span>
            <span className="flex flex-col justify-center gap-4">
              <Button
                label="Confirmar código"
                style={{ backgroundColor: '#212529' }}
              />
              <Button
                variant="outline"
                label={`(${0}) Reenviar código`}
                style={{ border: '1px solid black', color: 'black' }}
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
