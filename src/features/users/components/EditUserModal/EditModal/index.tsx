import { Modal } from '@istic-ui/react'
import React from 'react'


export type EditModalComponentProps = {
  children: React.ReactNode
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function EditModalComponent(props: EditModalComponentProps) {
  const { children, modal, setModal } = props

  return (
    <Modal
      isOpen={modal}
      title="Deseja Excluir esse Usuário?"
      onClose={() => setModal(!modal)}
      className="flex flex-col border-t-2 border-neutral-500"
    >
      {children}
    </Modal>
  )
}

export default EditModalComponent
