export interface IMedicalRecordState {
  medicalRecordDetails: {
    sampleCollectedDate: Date;
    sugarMmol: number;
    temperatureCelcius: number;
    plateletMmol: number;
    hemoglobinGdl: number;
    patientId: number;
    created: Date;
    createdBy: string;
    lastModified: Date;
    lastModifiedBy: string;
    id: number;
  };
  updateMedicalRecordDetails: {
    sampleCollectedDate: Date;
    sugarMmol: number;
    temperatureCelcius: number;
    plateletMmol: number;
    hemoglobinGdl: number;
    patientId: number;
    created: Date;
    createdBy: string;
    lastModified: Date;
    lastModifiedBy: string;
    id: number;
  };
  medicalRecordsOfPatientId: number;
}

export interface IPatientState {
  patientDetails: {
    id: number;
    name: string;
    dob: Date;
    weightKG: number;
    heightCM: number;
    address: string;
    contact: string;
    emergencyContact: string;
  };
  updatePatientDetails: {
    id: number;
    name: string;
    dob: Date;
    weightKG: number;
    heightCM: number;
    address: string;
    contact: string;
    emergencyContact: string;
  };
}
// create interface IPatientState with patientdetails: object and updatepatientid: number
export interface IUserState {
  userDetails: {
    id: number;
    firsName: string;
    lastName: string;
    username: string;
    password: string;
    created: string;
    createdBy: string;
    lastModified: string;
    lastModifiedBy: string;
  };
  isAuthenticated: boolean;
}

export {};

export interface IInputFieldProps {
  inputRef: React.RefObject<HTMLInputElement>;
  name: string;
  variant?: "outlined" | "filled" | "standard";
  label: string;
  type?: string;
  error?: { message: string };
  isFocus?: boolean;
  fullWidth?: boolean;
}

export interface IValidationSchema {
  name: string;
  dob: Date;
  weightKG: number;
  heightCM: number;
  address: string;
  contact: string;
  emergencyContact: string;
}
