import { Modal } from '@istic-ui/react'
import React from 'react'

type ModalComponentProps = {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

function ModalComponent(props: ModalComponentProps) {

  const { modal, setModal, children } = props

  return (
    <Modal
      isOpen={modal}
      title="Criar Novo Usuário"
      onClose={() => setModal(!modal)}
      className="flex flex-col border-t-2 border-neutral-500"
    >
      {children}
    </Modal>
  )
}

export default ModalComponent
