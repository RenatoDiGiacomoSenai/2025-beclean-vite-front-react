import { Button, Modal, Text } from '@istic-ui/react'

interface ConfirmModalProps {
  id: string
  title: string
  isOpen: boolean
  onClose: () => void
  description: string
  contentWidth?: number
  buttonProps: {
    left: {
      id?: string
      variant?: 'outline' | 'filled'
      label: string
      isLoading?: boolean
      onClick: () => void
    }
    right: {
      id?: string
      variant?: 'outline' | 'filled'
      label: string
      isLoading?: boolean
      onClick: () => void
    }
  }
  children?: React.ReactNode
}

function ConfirmModal({
  id,
  title,
  isOpen,
  onClose,
  description,
  contentWidth,
  children,
  buttonProps,
}: Readonly<ConfirmModalProps>) {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      contentWidth={contentWidth || 400}
    >
      <div id={id} className="flex flex-col gap-8">
        <div>
          <Text>{description}</Text>
          {children}
        </div>
        <div>
          <div className="flex justify-end gap-2">
            <Button
              id={buttonProps.left.id}
              grow
              size="sm"
              label={buttonProps.left.label || 'Cancelar'}
              isLoading={buttonProps.left.isLoading}
              onClick={
                buttonProps.left.onClick ? buttonProps.left.onClick : onClose
              }
              variant={
                buttonProps.left.variant ? buttonProps.left.variant : 'outline'
              }
            />
            <Button
              id={buttonProps.right.id}
              grow
              size="sm"
              label={buttonProps.right.label || 'Confirmar'}
              isLoading={buttonProps.right.isLoading}
              onClick={
                buttonProps.right.onClick ? buttonProps.right.onClick : onClose
              }
              variant={
                buttonProps.right.variant ? buttonProps.right.variant : 'filled'
              }
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmModal
