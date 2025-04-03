import { Button, TextInput } from '@istic-ui/react'
import { useUpdateUser } from '@features/users/services'
import { useEffect, useState } from 'react'
import { useToast } from '@shared/context'
import { router } from '@settings/tanstack-router'

import EditModalComponent from './EditModal'

type EditUserProps = {
  id: string
  name: string
  password?: string
}

export interface EditUserModalProps {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  users: EditUserProps
}

function EditUserModal(props: EditUserModalProps) {
  const { modal, setModal, users } = props
  const { showToast } = useToast()

  const [userData, setUserData] = useState<EditUserProps>({
    id: users?.id || '',
    name: users?.name || '',
    password: '',
  })

  const { updateUser, isError, isSuccess } = useUpdateUser()

  const handleUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.warn('userData', users)
    updateUser({
      data: {
        id: users?.id,
        name: userData.name,
        password: 'Admin@123',
      },
    })
  }

  useEffect(() => {
    if (isSuccess) {
      setModal(false)

      showToast({
        type: 'success',
        title: 'Usuário atualizado com sucesso.',
        durationInMs: 5000,
      })
      router.navigate({ to: '/', replace: true })
    }

    if (isError) {
      console.error('Ocorreu um erro ao atualizar o usuário.')

      showToast({
        type: 'error',
        title: 'Erro ao atualizar usuário.',
        durationInMs: 5000,
      })
      
    }
  }, [isSuccess, isError])

  return (
    <EditModalComponent modal={modal} setModal={setModal}>
      <form
        className="flex flex-col gap-4 border-t-[2px] border-neutral-300 pt-4 w-[432px] h-full"
        onSubmit={handleUpdateUser}
      >
        <TextInput
          error={{
            description: '',
          }}
          grow
          label="Nome do Usuário"
          placeholder={users?.name}
          required
          size="lg"
          onChange={(item) => {
            setUserData({
              ...userData,
              name: item.target.value,
            })
          }}
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
          disabled
          value={users?.email}
        />
        <span className="w-full h-[2px] bg-neutral-300"></span>
        <div className="flex justify-end gap-4">
          <Button
            label="Cancelar"
            onClick={() => setModal(false)}
            size="sm"
            variant="outline"
            type="button"
          />
          <Button
            label="Alterar Usuário"
            type="submit"
            size="sm"
            variant="filled"
          />
        </div>
      </form>
    </EditModalComponent>
  )
}

export default EditUserModal
