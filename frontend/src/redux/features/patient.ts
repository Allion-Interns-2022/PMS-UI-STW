import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { IPatientState } from "../../config/commonTypes";
//TODO initialstates file
const initialState: IPatientState = {
  patientDetails: {
    id: 0,
    name: "",
    dob: DateTime.now().toString(),
    weightKG: 0,
    heightCM: 0,
    address: "",
    contact: "",
    emergencyContact: "",
  },
}; 

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    allPatients: (state, action: PayloadAction<IPatientState["patientDetails"]>) => {
      state.patientDetails = action.payload;
      // action.payload.dob.isEmpty() && console.log(action.payload.dob);
    },
    addPatient: (state, action: PayloadAction<IPatientState["patientDetails"]>) => {
      state.patientDetails = action.payload;
    },
    deletePatient: (state, action: PayloadAction<IPatientState["patientDetails"]>) => {
      state.patientDetails.id = action.payload.id;
    },
    updatePatient: (state, action: PayloadAction<number>) => {
      state.patientDetails.id = action.payload;
    },
    getPatient: (state, action: PayloadAction<IPatientState["patientDetails"]>) => {
      state.patientDetails = action.payload;
    },
  },
});

export const patientActions = patientSlice.actions;

export default patientSlice.reducer;
