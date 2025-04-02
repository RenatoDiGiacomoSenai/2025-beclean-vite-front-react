import { Button, TextInput } from '@istic-ui/react'
import { UserTypes } from '@features/users/services'

import EditModalComponent from './EditModal'

export interface EditUserModalProps {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  users: UserTypes | undefined
}

function EditUserModal(props: EditUserModalProps) {
  const { modal, setModal, users } = props

  return (
    <EditModalComponent modal={modal} setModal={setModal}>
      <form
        className="flex flex-col gap-4 border-t-[2px] border-neutral-300 pt-4 w-[432px] h-full"
        // onSubmit={UpdateUser}
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
            console.warn(item.target.value)
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
          />
          <Button
            label="Criar Usuário"
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
