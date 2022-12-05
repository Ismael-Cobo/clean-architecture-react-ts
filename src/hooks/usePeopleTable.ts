import { Person } from '@/models'
import { useFavorite, usePeople } from './'

export const usePeopleTable = (rows = 5) => {
  const { people } = usePeople()
  const { favorite, startAddFavorite } = useFavorite()
  const rowsPerPage = rows

  const findOnePerson = (person: Person): boolean => {
    return !!favorite.find((p) => p.id === person.id)
  }

  const filterPerson = (person: Person) => {
    return favorite.filter((p) => p.id !== person.id)
  }

  const handleChange = (person: Person) => {
    const filteredPeople = findOnePerson(person) ? filterPerson(person) : [...favorite, person]

    startAddFavorite(filteredPeople)
  }

  return {
    people,
    favorite,
    rowsPerPage,
    findOnePerson,
    filterPerson,
    handleChange,
  }
}
