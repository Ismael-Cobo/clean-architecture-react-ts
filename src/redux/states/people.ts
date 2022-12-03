import { LocalStorageTypes, Person } from '@/models'
import { getLocalStorage } from '@/utility'
import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorage } from '../../utility/localStorage.utility'

const initialState: Person[] = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: getLocalStorage(LocalStorageTypes.PEOPLE)
      ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
      : initialState,
  },
  reducers: {
    addPeople: (state, { payload }) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, payload)
      state.people = payload
    },
  },
})

export const { addPeople } = peopleSlice.actions
