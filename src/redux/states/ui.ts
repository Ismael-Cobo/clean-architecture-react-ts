import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'favourite',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openCustomDialog: (state) => {
      state.isOpen = true
    },
    closeCustomDialog: (state) => {
      state.isOpen = false
    },
  },
})

export const { openCustomDialog, closeCustomDialog } = uiSlice.actions
