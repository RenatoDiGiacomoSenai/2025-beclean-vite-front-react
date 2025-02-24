import { Toast, ToastProps } from '@istic-ui/react'
import {
  createContext,
  useContext,
  useState,
  useCallback,
  PropsWithChildren,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

interface ToastWithId extends ToastProps {
  id: string
}

interface ToastContextType {
  showToast: (options: ToastProps) => void
}

export const ToastContext = createContext({} as ToastContextType)

function ToastProvider(props: Readonly<PropsWithChildren<unknown>>) {
  const [toasts, setToasts] = useState<ToastWithId[]>([])

  const showToast = useCallback((options: ToastProps) => {
    const id = uuidv4()
    setToasts((prevToasts) => [...prevToasts, { ...options, id }])
  }, [])

  const handleClose = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {props.children}
      {toasts.map((toast, index) => (
        <div style={{ zIndex: 1000, position: 'absolute' }} key={toast.id}>
          <Toast
            key={toast.id}
            index={index}
            {...toast}
            position={'top-right'}
            onClose={() => {
              toast.onClose?.()
              handleClose(toast.id)
            }}
          />
        </div>
      ))}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export default ToastProvider
