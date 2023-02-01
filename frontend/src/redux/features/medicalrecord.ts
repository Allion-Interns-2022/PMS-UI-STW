import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { IMedicalRecordState, IPatientState } from "../../config/commonTypes";
import initialMedicalRecordValues from "../../config/initialValues/initialMedicalRecordValues";
const initialState: IMedicalRecordState = {
  medicalRecordDetails: initialMedicalRecordValues,
  updateMedicalRecordDetails: initialMedicalRecordValues,
  medicalRecordsOfPatientId: 0,
};

export const medicalRecordSlice = createSlice({
  name: "medicalRecord",
  initialState,
  reducers: {
    getMedicalRecord: (
      state,
      action: PayloadAction<IMedicalRecordState["medicalRecordDetails"]>
    ) => {
      state.medicalRecordDetails = action.payload;
    },
    updateMedicalRecord: (
      state,
      action: PayloadAction<IMedicalRecordState["medicalRecordDetails"]>
    ) => {
      state.updateMedicalRecordDetails = action.payload;
    },
    medicalRecordsOfPatientId: (state, action: PayloadAction<number>) => {
      state.medicalRecordsOfPatientId = action.payload;
    },
  },
});

export const medicalRecordActions = medicalRecordSlice.actions;

export default medicalRecordSlice.reducer;
