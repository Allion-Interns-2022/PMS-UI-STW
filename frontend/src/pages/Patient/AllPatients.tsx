import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import NavBar from "../../NavBar";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { patientActions } from "../../redux/features/patient";
import { deletePatient, allPatients } from "../../services/patientService";
import { IPatientState } from "../../config/commonTypes";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getMedicalRecord } from "../../services/medicalRecordService";
import { medicalRecordActions } from "../../redux/features/medicalrecord";

const AllPatients = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteHandler = (id: number) => {
    deletePatient(
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
        allPatients(
          (successData: any) =>
            dispatch(patientActions.allPatients(successData)),
          (errorData: any) => console.log(errorData)
        );
      },
      (errorData: any) => console.log(errorData)
    );
  };

  function updateHandler(
    patientDetails: IPatientState["updatePatientDetails"]
  ) {
    dispatch(patientActions.updatePatient(patientDetails));
    navigate("/updatepatient");
  }

  const recordHandler = (Id: number) => {
    dispatch(medicalRecordActions.medicalRecordsOfPatientId(Id));
    getMedicalRecord(
      Id,
      (successData: any) => {
        dispatch(medicalRecordActions.getMedicalRecord(successData));
        navigate("/medicalrecords");
      },
      (errorData: any) => console.log(errorData)
    );
  };

  const selectorData = useAppSelector((state) => state.patient.patientDetails);

  useEffect(() => {
    allPatients(
      (successData: any) => dispatch(patientActions.allPatients(successData)),
      (errorData: any) => console.log(errorData)
    );
  }, [typeof selectorData]);
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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>DOB</th>
            <th>WeightKG</th>
            <th>HeightCM</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Emergency Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectorData instanceof Array &&
            selectorData?.map((p) => (
              <tr key={p.Id}>
                <td>{p.Id}</td>
                <td>{p.Name}</td>
                <td>{moment(p.DOB).format("YYYY-MM-DD")}</td>
                <td>{p.WeightKG}</td>
                <td>{p.HeightCM}</td>
                <td>{p.Address}</td>
                <td>{p.Contact}</td>
                <td>{p.EmergencyContact}</td>
                <td>
                  <button
                    name={p.Id}
                    title="View medical records"
                    type="button"
                    className="btn btn-outline-primary m-1"
                    onClick={() => {
                      recordHandler(p.Id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#007bff"
                      className="bi bi-clipboard2-pulse"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                      <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                      <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z" />
                    </svg>
                  </button>
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
                    name={p.Id}
                    title="Delete"
                    type="button"
                    className="btn btn-outline-danger m-1"
                    onClick={() => {
                      deleteHandler(p.Id);
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

export default AllPatients;
