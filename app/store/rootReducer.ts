import { combineReducers } from '@reduxjs/toolkit';
import listenedToSlice from '@/app/features/last-played/model/slice/ListenedToSlice'
export const rootReducer = combineReducers({
  listenedTo:listenedToSlice,
});