import moment from "moment";
import { IMedicalRecordState } from "../commonTypes";

export const initialMedicalRecordValues: IMedicalRecordState["medicalRecordDetails"] =
  {
    sampleCollectedDate: moment().toDate(),
    sugarMmol: 0,
    temperatureCelcius: 0,
    plateletMmol: 0,
    hemoglobinGdl: 0,
    patientId: 0,
    created: moment().toDate(),
    createdBy: "",
    lastModified: moment().toDate(),
    lastModifiedBy: "",
    id: 0,
  };

  export default initialMedicalRecordValues;