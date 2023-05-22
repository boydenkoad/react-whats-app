import { configureStore } from '@reduxjs/toolkit'
import {useDispatch,TypedUseSelectorHook,useSelector} from 'react-redux'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    authReducer:authReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector