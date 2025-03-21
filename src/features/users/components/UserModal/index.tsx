import { Button, Select, TextInput } from '@istic-ui/react'
import { UserRoles, UserTypes } from '@features/users/services'

import ModalComponent from './CreationUserModal'

type CreationUserModalProps = {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  createUser: (data: React.SetStateAction<UserTypes>) => void
  sendForm: (e?: React.FormEvent<HTMLFormElement>) => void
}

function CreationUserModal(props: CreationUserModalProps) {
  const { modal, setModal, createUser, sendForm } = props

  return (
    <ModalComponent modal={modal} setModal={setModal}>
      <form
        className="flex flex-col gap-4 border-t-[2px] border-neutral-300 pt-4 w-[432px] h-full"
        onSubmit={sendForm}
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
          onChange={(item) => {
            createUser((prev:UserTypes) => ({
              ...prev,
              name: (item.target as HTMLInputElement).value,
            }))
          }}
        />

        <Select
          error={{
            description: '',
          }}
          grow
          label="Permissão"
          onSelect={(item) => {
            createUser((prev:UserTypes) => ({
              ...prev,
              type: item?.value as UserRoles,
            }))
          }}
          options={[
            {
              label: 'Selecione a Permissão',
              value: 'null',
              disabled: true,
            },
            {
              label: 'Administrador',
              value: UserRoles.ADMIN,
            },
            {
              label: 'Consumidor',
              value: UserRoles.CONSUMER,
            },
          ]}
          pickerHeight="30dvh"
          placeholder="Selecione a permissão do usuário"
          required
          size="lg"
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
          onChange={(item) => {
            createUser((prev:UserTypes) => ({
              ...prev,
              email: (item.target as HTMLInputElement).value,
            }))
          }}
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
    </ModalComponent>
  )
}

export default CreationUserModal
