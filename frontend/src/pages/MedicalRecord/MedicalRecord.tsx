import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import NavBar from "../../NavBar";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { patientActions } from "../../redux/features/patient";
import {
  deletePatient,
  getPatient,
  allPatients,
} from "../../services/patientService";
import { IMedicalRecordState, IPatientState } from "../../config/commonTypes";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  deleteMedicalRecord,
  getMedicalRecord,
} from "../../services/medicalRecordService";
import { medicalRecordActions } from "../../redux/features/medicalrecord";
import { Button } from "react-bootstrap";

const MedicalRecord = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const medicalRecordsOfPatientId = useAppSelector(
    (state) => state.medicalRecord.medicalRecordsOfPatientId
  );
  console.log(medicalRecordsOfPatientId);

  const deleteHandler = (id: number) => {
    deleteMedicalRecord(
      id,
      (successData: any) => {
        toast.success(successData, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getMedicalRecord(
          medicalRecordsOfPatientId,
          (successData: any) => {
            dispatch(medicalRecordActions.getMedicalRecord(successData));
            navigate("/medicalrecords");
          },
          (errorData: any) => console.log(errorData)
        );
      },
      (errorData: any) => console.log(errorData)
    );
  };

  function updateHandler(
    medicalRecordDetails: IMedicalRecordState["medicalRecordDetails"]
  ) {
    dispatch(medicalRecordActions.updateMedicalRecord(medicalRecordDetails));
    navigate("/updatemedicalrecord");
  }

  const addHandler = () => {
    navigate("/addmedicalrecord");
  };

  const selectorData = useAppSelector(
    (state) => state.medicalRecord.medicalRecordDetails
  );

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <NavBar />

      <h2 className="d-inline-block px-4 py-4">Medical Records</h2>
      <Button
        className="d-inline-block ml-4"
        variant="primary"
        onClick={addHandler}
      >
        Add Record
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Sample Collected Date</th>
            <th>Sugar (Mmol)</th>
            <th>Temperature (Celcius)</th>
            <th>Platelet (Mmol)</th>
            <th>Hemoglobin (Gdl)</th>
            <th>PatientId</th>
            <th>Created</th>
            <th>CreatedBy</th>
            <th>LastModified</th>
            <th>LastModifiedBy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectorData instanceof Array &&
            selectorData?.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{moment(p.sampleCollectedDate).format("YYYY-MM-DD")}</td>
                <td>{p.sugarMmol}</td>
                <td>{p.temperatureCelcius}</td>
                <td>{p.plateletMmol}</td>
                <td>{p.hemoglobinGdl}</td>
                <td>{p.patientId}</td>
                <td>{moment(p.created).format("YYYY-MM-DD")}</td>
                <td>{p.createdBy}</td>
                <td>{moment(p.lastModified).format("YYYY-MM-DD")}</td>
                <td>{p.lastModifiedBy}</td>
                <td>
                  <button
                    type="button"
                    title="Update"
                    className="btn btn-outline-success m-1"
                    onClick={() => {
                      updateHandler(p);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#28A745"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                  <button
                    name={p.id}
                    title="Delete"
                    type="button"
                    className="btn btn-outline-danger m-1"
                    onClick={() => {
                      deleteHandler(p.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#DC3545"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MedicalRecord;