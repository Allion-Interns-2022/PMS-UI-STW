import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatientState } from "../../config/commonTypes";
import initialPatientValues from "../../config/initialValues/initialPatientValues";

const initialState: IPatientState = {
  patientDetails: initialPatientValues,
  updatePatientDetails: initialPatientValues,
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    allPatients: (
      state,
      action: PayloadAction<IPatientState["patientDetails"]>
    ) => {
      state.patientDetails = action.payload;
    },
    addPatient: (
      state,
      action: PayloadAction<IPatientState["patientDetails"]>
    ) => {
      state.patientDetails = action.payload;
    },
    deletePatient: (
      state,
      action: PayloadAction<IPatientState["patientDetails"]>
    ) => {
      state.patientDetails.Id = action.payload.Id;
    },
    updatePatient: (
      state,
      action: PayloadAction<IPatientState["updatePatientDetails"]>
    ) => {
      state.updatePatientDetails = action.payload;
    },
    getPatient: (
      state,
      action: PayloadAction<IPatientState["patientDetails"]>
    ) => {
      state.patientDetails = action.payload;
    },
  },
});

export const patientActions = patientSlice.actions;

export default patientSlice.reducer;
