import React from 'react'
import { Button } from '@istic-ui/react'


type AddUserBtnProps = {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function AddUserBtn(props: AddUserBtnProps) {
  const { modal, setModal } = props

  return (
    <Button
      iconProps={{
        iconName: 'add',
        iconPosition: 'left',
      }}
      label="Criar Novo Usuário"
      size="xs"
      onClick={() => setModal(!modal)}
    />
  )
}

export default AddUserBtn
