import { useDeleteUser } from '@features/users/services'
import { Button } from '@istic-ui/react'
import { useToast } from '@shared/context'
import { useEffect } from 'react'

import DelConfirModalComponent from './DelConfirModal'

export interface UserInfoProps {
  modal: boolean
  setModal: (modal: boolean) => void
  userId: string | undefined
}

function ConfirmationModal({ modal, setModal, userId }: UserInfoProps) {
  const { showToast } = useToast()
  const { deleteUser, isSuccess, isError } = useDeleteUser()

  const handleDeleteUser = () => {
    if (!userId) return
    deleteUser(userId)
  }

  useEffect(() => {
    if (isSuccess) {
      showToast({
        type: 'success',
        title: 'Usuário removido com sucesso.',
        durationInMs: 5000,
      })
      setModal(false)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      showToast({
        type: 'error',
        title: 'Erro ao remover usuário.',
        durationInMs: 5000,
      })
      setModal(false)
    }
  }, [isError])

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
