import { Dialog, DialogContent, DialogTitle, Tooltip } from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'

interface ModalProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title: string
  children?: JSX.Element
}

const Modal = ({ open, setOpen, title, children }: ModalProps) => {
  return (
    <Dialog open={open}>
      <div className='bg-medium-gray'>
        <Tooltip title='Cerrar' arrow>
          <CancelIcon
            onClick={() => { setOpen(false) }}
            className='text-separator-gray absolute top-6 right-8 hover:cursor-pointer text-4xl'
          />
        </Tooltip>
        <DialogTitle className='text-3xl font-bold text-center text-yellow mt-10'>
          {title}
        </DialogTitle>
        <DialogContent
        >
          {children}
        </DialogContent>
      </div>
    </Dialog>
  )
}

export { Modal }
