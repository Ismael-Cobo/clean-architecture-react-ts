import { Person } from '@/models'
import { addFavorite } from '@/redux'
import { useAppDispatch, useAppSelector } from './redux'

export const useFavorite = () => {
  const dispatch = useAppDispatch()
  const { favorite } = useAppSelector((state) => state.favourite)

  const startAddFavorite = (persons: Person[]) => {
    dispatch(addFavorite(persons))
  }

  return {
    favorite,

    startAddFavorite,
  }
}
