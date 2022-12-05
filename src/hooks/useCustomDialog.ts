import { closeCustomDialog, openCustomDialog } from '@/redux'
import { useAppDispatch, useAppSelector } from './redux'

export const useCustomDialog = () => {
  const dispatch = useAppDispatch()

  const { isOpen } = useAppSelector((state) => state.ui)

  const startOpeningCustomDialog = () => {
    dispatch(openCustomDialog())
  }

  const startClosingCustomDialog = () => {
    dispatch(closeCustomDialog())
  }

  return {
    isOpen,
    startOpeningCustomDialog,
    startClosingCustomDialog,
  }
}
