import api from "../config/api";
import { IPatientState } from "../config/commonTypes";

export const allPatients = (
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.get("patients").then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};

export const postPatient = (
  values: IPatientState["patientDetails"],
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.post("patients", values).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};

export const updatePatient = (
  patientDetails: IPatientState["patientDetails"],
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.put(`patients/${patientDetails.Id}`, patientDetails).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};

export const deletePatient = (
  id: number,
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.delete(`patients/${id}`).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};

export const getPatient = (
  id: number,
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.get(`patients/${id}`).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
      console.log(error);
    }
  );
};
