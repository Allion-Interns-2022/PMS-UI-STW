import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../features/patient";
import userReducer from "../features/user";
import medicalRecordReducer from "../features/medicalrecord";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    user: userReducer,
    medicalRecord: medicalRecordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
