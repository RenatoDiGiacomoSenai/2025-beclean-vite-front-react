import { Button, TextInput } from '@istic-ui/react'
import { useToast } from '@shared/context'
import {
  useCreateUser,
  UserDataProps,
  UserRoles,
} from '@features/users/services'
import { useEffect, useState } from 'react'

import ModalComponent from './CreationUserModal'

type CreationUserModalProps = {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function CreationUserModal(props: CreationUserModalProps) {
  const { showToast } = useToast()
  const { modal, setModal } = props
  const { create, loading, isSuccess, isError } = useCreateUser()
  const [userData, setUserData] = useState<UserDataProps>({
    name: '',
    email: '',
    type: UserRoles.ADMIN,
    password: 'Admin@134',
  })

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.warn('userData', userData)
    create(userData)
  }

  useEffect(() => {
    if (isSuccess) {
      showToast({
        type: 'success',
        title: 'Usuário criado com sucesso.',
        durationInMs: 5000,
      })
      setModal(false)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      console.error('Error creating user')
      showToast({
        type: 'error',
        title: 'Erro ao criar usuário.',
        durationInMs: 5000,
      })
    }
  }, [isError])

  return (
    <>
      <ModalComponent modal={modal} setModal={setModal}>
        {!loading ? (
          <form
            className="flex flex-col gap-4 border-t-[2px] border-neutral-300 pt-4 w-[432px] h-full"
            onSubmit={handleCreateUser}
          >
            <TextInput
              error={{
                description: '',
              }}
              grow
              label="Nome do Usuário"
              placeholder="Digite o nome do usuário"
              required
              size="lg"
              onChange={(item) =>
                setUserData((prev) => ({ ...prev, name: item.target.value }))
              }
            />

            <TextInput
              error={{
                description: '',
              }}
              grow
              label="E-mail do usuário"
              placeholder="Digite o e-mail do usuário"
              required
              size="lg"
              onChange={(item) =>
                setUserData((prev) => ({ ...prev, email: item.target.value }))
              }
            />
            <span className="w-full h-[2px] bg-neutral-300"></span>
            <div className="flex justify-end gap-4">
              <Button
                label="Cancelar"
                onClick={() => setModal(false)}
                size="sm"
                variant="outline"
                type='button'
              />
              <Button
                label="Criar Usuário"
                type="submit"
                size="sm"
                variant="filled"
              />
            </div>
          </form>
        ) : (
          <div>
            <h1>CARREGANDO</h1>
          </div>
        )}
      </ModalComponent>
    </>
  )
}

export default CreationUserModal
