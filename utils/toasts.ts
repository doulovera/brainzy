import { toast } from 'react-hot-toast'

const style = {
  zIndex: 120,
  top: '5rem',
}

export const toastSuccess = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    id: 'success',
    duration: 3000,
    style,
    icon: '✅',
  })
}

export const toastError = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    id: 'error',
    duration: 3000,
    style,
    icon: '❌',
  })
}
