import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../features/patient';
import userReducer from '../features/user';

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;