import { Modal } from '@istic-ui/react'
import React from 'react'

type DelConfirModalComponentProps = {
  modal: boolean
  setModal: (modal: boolean) => void
  children: React.ReactNode
}

function DelConfirModalComponent(props: DelConfirModalComponentProps) {
  const { modal, setModal, children } = props

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

export default DelConfirModalComponent
