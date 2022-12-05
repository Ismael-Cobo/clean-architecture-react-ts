import { configureStore } from '@reduxjs/toolkit'
import { Person } from '@/models'
import { favoriteSlice, peopleSlice, uiSlice } from './states'

export interface AppStore {
  people: {
    people: Person[]
  }
  favourite: {
    favorite: Person[]
  }
  ui: { isOpen: boolean }
}

export const store = configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favourite: favoriteSlice.reducer,
    ui: uiSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
