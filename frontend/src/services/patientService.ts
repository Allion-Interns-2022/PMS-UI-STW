import api from "../config/api";
import { IPatientState } from "../config/commonTypes";
import { useAppDispatch } from "../redux/app/hooks";
import { patientActions } from "../redux/features/patient";

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
  values: IPatientState,
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
  values: IPatientState,
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.put(`patients/${values.patientDetails.id}`, values).then(
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
  const patientData: IPatientState["patientDetails"] = {
    id: 0,
    name: "",
    dob: "",
    weightKG: 0,
    heightCM: 0,
    address: "",
    contact: "",
    emergencyContact: "",
  }
  api.get(`patients/${id}`).then(
    (response) => {
      success(response);
      return response;
    },
    (error) => {
      failed(error);
    }
  );
  //toask 
};
