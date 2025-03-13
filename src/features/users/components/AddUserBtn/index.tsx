import React from 'react'
import { Button } from '@istic-ui/react'

function AddUserBtn() {
  return (
    <Button
      iconProps={{
        iconName: 'add',
        iconPosition: 'left',
      }}
      label="Criar Novo Usuário"
      size='xs'
    />
  )
}

export default AddUserBtn
