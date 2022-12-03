import { Person } from '@/models'
import { getLocalStorage } from '@/utility'
import { createSlice } from '@reduxjs/toolkit'
import { LocalStorageTypes } from '../../models/localstorage'
import { setLocalStorage } from '../../utility/localStorage.utility'

const initialState: Person[] = []

export const favoriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favorite: getLocalStorage(LocalStorageTypes.FAVORITE)
      ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITE) as string)
      : initialState,
  },
  reducers: {
    addFavorite: (state, { payload }: { payload: Person[] }) => {
      state.favorite = payload
      setLocalStorage(LocalStorageTypes.FAVORITE, payload)
    },
  },
})

export const { addFavorite } = favoriteSlice.actions
