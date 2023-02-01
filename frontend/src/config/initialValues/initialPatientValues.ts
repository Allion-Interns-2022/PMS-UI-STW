import moment from "moment";
import { IMedicalRecordState, IPatientState } from "../commonTypes";

const initialPatientValues: IPatientState["patientDetails"] = {
  id: 0,
  name: "",
  dob: moment().toDate(),
  weightKG: 0,
  heightCM: 0,
  address: "",
  contact: "",
  emergencyContact: "",
};

export default initialPatientValues;
