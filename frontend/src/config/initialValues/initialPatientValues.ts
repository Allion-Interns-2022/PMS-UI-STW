import moment from "moment";
import { IPatientState } from "../commonTypes";

const initialPatientValues: IPatientState["patientDetails"] = {
  Id: 0,
  Name: "",
  DOB: moment().toDate(),
  WeightKG: 0,
  HeightCM: 0,
  Address: "",
  Contact: "",
  EmergencyContact: "",
  MedicalRecords: null,
};

export default initialPatientValues;
