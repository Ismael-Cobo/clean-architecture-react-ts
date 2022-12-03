import { Person } from '@/models'
import { addPeople } from '@/redux'
import { useAppDispatch, useAppSelector } from './redux'

export const usePeople = () => {
  const dispatch = useAppDispatch()
  const { people } = useAppSelector((state) => state.people)

  const startAddPeople = (persons: Person[]) => {
    dispatch(addPeople(persons))
  }

  return {
    people,

    startAddPeople,
  }
}
