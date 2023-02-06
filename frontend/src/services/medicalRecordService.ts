import api from "../config/api";
import { IMedicalRecordState } from "../config/commonTypes";

export const getMedicalRecord = (
  Id: number,
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.get(`medicalrecords/patient/${Id}`).then(
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
    .put(`medicalRecords/${medicalRecordDetails.Id}`, medicalRecordDetails)
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
    Id: number,
    success: (d: any) => void,
    failed: (d: any) => void
  ) => {
    api.delete(`medicalRecords/${Id}`).then(
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


