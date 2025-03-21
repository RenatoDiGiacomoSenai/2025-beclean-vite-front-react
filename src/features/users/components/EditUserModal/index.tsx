import { useEffect, useState } from 'react'
import { Button, Select, TextInput } from '@istic-ui/react'
import { UserRoles } from '@features/users/services'

import EditModalComponent from './EditModal'

export interface EditUserModalProps {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  dataUser: any
}

function EditUserModal(props: EditUserModalProps) {
  const { modal, setModal, dataUser } = props
  const [userData, setUserData] = useState<{ name: string; email: string; role: UserRoles }>(dataUser)

  const UpdateUser = () => {
    // console.log(dataUser)
  }

  useEffect(() => {
    // console.log(userData)
  }, [userData])

  return (
    <EditModalComponent modal={modal} setModal={setModal}>
      <form
        className="flex flex-col gap-4 border-t-[2px] border-neutral-300 pt-4 w-[432px] h-full"
        onSubmit={UpdateUser}
      >
        <TextInput
          error={{
            description: '',
          }}
          grow
          label="Nome do Usuário"
          placeholder={dataUser?.name}
          required
          size="lg"
          onChange={(item) => {setUserData((prev) => ({ ...prev, name: item.target.value }))}}
        />

        <Select
          error={{
            description: '',
          }}
          grow
          label="Permissão"
          
          onSelect={(item) => {setUserData((prev) => ({ ...prev, type: item?.value }))}}
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
          disabled
          value={dataUser?.email}
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
