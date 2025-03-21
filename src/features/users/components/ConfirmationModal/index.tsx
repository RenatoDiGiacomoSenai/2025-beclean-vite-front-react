import { Button } from '@istic-ui/react'
import userService from '@features/users/services/user.service'

import { UserInfoProps } from '../List'

import DelConfirModalComponent from './DelConfirModal'

type ConfirmationModalProps = {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  dataUser: UserInfoProps| null
}

function ConfirmationModal(props: ConfirmationModalProps) {
  const { modal, setModal, dataUser } = props

  const handleDeleteUser = () => {
    userService.DeleteUser(dataUser?.id as string)
  }

  return (
    <DelConfirModalComponent modal={modal} setModal={setModal}>
      <div className="flex flex-col gap-4 border-t-[2px] border-neutral-300 pt-4 w-[432px] h-full">
        <h2>Deseja confirmar?</h2>
        <p>Se você confirmar, o usuário será removido.</p>
        <span className="w-full h-[2px] bg-neutral-300"></span>
        <div className="flex justify-end gap-4">
          <Button
            label="Cancelar"
            onClick={() => setModal(false)}
            size="sm"
            variant="outline"
          />
          <Button
            label="Remover Usuário"
            onClick={() => handleDeleteUser()}
            size="sm"
            variant="filled"
          />
        </div>
      </div>
    </DelConfirModalComponent>
  )
}

export default ConfirmationModal
