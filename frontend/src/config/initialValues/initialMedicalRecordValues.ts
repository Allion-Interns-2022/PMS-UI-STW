import moment from "moment";
import { IMedicalRecordState } from "../commonTypes";

export const initialMedicalRecordValues: IMedicalRecordState["medicalRecordDetails"] =
  {
    SampleCollectedDate: moment().toDate(),
    SugarMmol: 0,
    TemperatureCelcius: 0,
    PlateletMmol: 0,
    HemoglobinGdl: 0,
    PatientId: 0,
    Created: moment().toDate(),
    CreatedBy: "",
    LastModified: moment().toDate(),
    LastModifiedBy: "",
    Id: 0,
  };

  export default initialMedicalRecordValues;