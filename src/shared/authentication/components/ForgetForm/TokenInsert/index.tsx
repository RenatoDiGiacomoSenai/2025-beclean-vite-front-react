import logo from '@assets/login-logo.svg'
import { Button } from '@istic-ui/react'
import CharInput from '@shared/components/TokenInput'

function TokenInsert() {
  return (
    <div className="w-full md:w-[608px]">
      <form>
        <div className="flex flex-col gap-4">
          <span className="flex flex-col">
            <img src={logo} width={164} alt="" />
          </span>

          <span className="flex flex-col gap-8">
            <h4 className=" text-title-h4">Recuperação de Senha</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="border-2 border-black rounded-full px-3 py-1">
                  1
                </div>
                <div>Código de Verificação</div>
              </div>

              <div className="flex items-center gap-2">
                <div className="border-2 border-black rounded-full px-3 py-1">
                  1
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
            <span className="flex justify-space-between">
              <CharInput />
              <CharInput />
              <CharInput />
              <CharInput />
            </span>
            <span className="flex flex-col justify-center gap-4">
              <Button label="teste" style={{ backgroundColor: '#212529' }} />
              <Button
                variant="outline"
                label="teste"
                style={{ border: '1px solid black', color: 'black' }}
              />
            </span>
          </span>
        </div>
      </form>
    </div>
  )
}

export default TokenInsert
