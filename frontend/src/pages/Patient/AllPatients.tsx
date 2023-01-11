import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useEffect } from "react";
import NavBar from "../../NavBar";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { patientActions } from "../../redux/features/patient";
import {
  deletePatient,
  getPatient,
  allPatients,
} from "../../services/patientService";
import { IPatientState } from "../../config/commonTypes";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllPatients = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   Axios.get("https://localhost:7197/api/patients").then((response) => {
  //     dispatch(patientActions.allPatients(response.data));
  //   });
  // }, []);
  const deleteHandler = (id: number) => {
    deletePatient(
      id,
      (successData: any) =>
        toast.success(successData, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }),
      (errorData: any) => console.log(errorData)
    );
  };

  function updateHandler(id: number) {
    getPatient(
      id,
      (successData: any) => dispatch(patientActions.updatePatient(id)),
      (errorData: any) => console.log(errorData)
    );
    navigate("/updatepatient");
  }

  const selectorData = useAppSelector((state) => state.patient.patientDetails);

  useEffect(() => {
    allPatients(
      (successData: any) => dispatch(patientActions.allPatients(successData)),
      (errorData: any) => console.log(errorData)
    );
  }, []);

  

  return (
    <div>
      <NavBar />
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
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.dob}</td>
                <td>{p.weightKG}</td>
                <td>{p.heightCM}</td>
                <td>{p.address}</td>
                <td>{p.contact}</td>
                <td>{p.emergencyContact}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light m-1"
                    onClick={() => {
                      updateHandler(p.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
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
                    type="button"
                    className="btn btn-light m-1"
                    onClick={() => {
                      deleteHandler(p.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
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
