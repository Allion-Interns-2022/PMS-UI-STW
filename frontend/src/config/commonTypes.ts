export interface IMedicalRecordState {
  medicalRecordDetails: {
    SampleCollectedDate: Date;
    SugarMmol: number;
    TemperatureCelcius: number;
    PlateletMmol: number;
    HemoglobinGdl: number;
    PatientId: number;
    Created: Date;
    CreatedBy: string;
    LastModified: Date;
    LastModifiedBy: string;
    Id: number;
  };
  updateMedicalRecordDetails: IMedicalRecordState["medicalRecordDetails"];
  medicalRecordsOfPatientId: number;
}

export interface IPatientState {
  patientDetails: {
    Id: number;
    Name: string;
    DOB: Date;
    WeightKG: number;
    HeightCM: number;
    Address: string;
    Contact: string;
    EmergencyContact: string;
    MedicalRecords: null;
  };
  updatePatientDetails: IPatientState["patientDetails"];
}

export interface IUserState {
  userDetails: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    created: Date;
    createdBy: string;
    lastModified: Date;
    lastModifiedBy: string;
  };
  isAuthenticated: boolean;
  userToken: string;
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
  Name: string;
  DOB: Date;
  WeightKG: number;
  HeightCM: number;
  Address: string;
  Contact: string;
  EmergencyContact: string;
}
