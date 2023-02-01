import api from "../config/api";
import { IMedicalRecordState, IPatientState } from "../config/commonTypes";
import { useAppDispatch } from "../redux/app/hooks";
import { patientActions } from "../redux/features/patient";

export const getMedicalRecord = (
  id: number,
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.get(`medicalrecords/patient/${id}`).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};

export const updateMedicalRecord = (
  medicalRecordDetails: IMedicalRecordState["medicalRecordDetails"],
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api
    .put(`medicalRecords/${medicalRecordDetails.id}`, medicalRecordDetails)
    .then(
      (response) => {
        success(response);
      },
      (error) => {
        failed(error);
      }
    );
};

export const deleteMedicalRecord = (
    id: number,
    success: (d: any) => void,
    failed: (d: any) => void
  ) => {
    api.delete(`medicalRecords/${id}`).then(
      (response) => {
        success(response);
      },
      (error) => {
        failed(error);
      }
    );
  };

export const postMedicalRecord = (
  values: IMedicalRecordState["medicalRecordDetails"],
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.post("medicalRecords", values).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};


