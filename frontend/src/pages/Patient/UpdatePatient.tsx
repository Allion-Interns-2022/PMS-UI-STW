import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPatientState } from "../../config/commonTypes";
import { updatePatient } from "../../services/patientService";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../../NavBar";
import { useAppSelector } from "../../redux/app/hooks";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { PatientValidationSchema as validationSchema } from "../../config/ValidationRules";

const App: React.FC = () => {
  const patientDetails: IPatientState["patientDetails"] = useAppSelector(
    (state) => state.patient.updatePatientDetails
  );

  const initialValues = {
    id: patientDetails.id,
    name: patientDetails.name,
    dob: patientDetails.dob,
    weightKG: patientDetails.weightKG,
    heightCM: patientDetails.heightCM,
    address: patientDetails.address,
    contact: patientDetails.contact,
    emergencyContact: patientDetails.emergencyContact,
  };

  const [data, setData] = useState({
    id: patientDetails.id,
    name: patientDetails.name,
    dob: patientDetails.dob,
    weightKG: patientDetails.weightKG,
    heightCM: patientDetails.heightCM,
    address: patientDetails.address,
    contact: patientDetails.contact,
    emergencyContact: patientDetails.emergencyContact,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPatientState["patientDetails"]>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const submitHandler = () => {
    updatePatient(
      data,
      (successData: any) => {
        navigate("/allpatients");
        setTimeout(() => {
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
        }, 0);
      },
      (errorData: any) => console.log(errorData)
    );
  };

  const onSubmit = (data: IPatientState["patientDetails"]) => {
    submitHandler();
  };

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
      <h2 className="py-4">Update Patient</h2>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={data.name}
              {...register("name", {
                onChange: (e) => {
                  setData({ ...data, name: e.target.value });
                },
              })}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={moment(data.dob).format("YYYY-MM-DD")}
              {...register("dob", {
                onChange: (e) => {
                  setData({ ...data, dob: moment(e.target.value).toDate() });
                },
              })}
              className={`form-control ${errors.dob ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.dob?.message}</div>
          </div>

          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              value={data.weightKG}
              {...register("weightKG", {
                onChange: (e) => {
                  setData({ ...data, weightKG: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.weightKG ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.weightKG?.message}</div>
          </div>

          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              value={data.heightCM}
              {...register("heightCM", {
                onChange: (e) => {
                  setData({ ...data, heightCM: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.heightCM ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.heightCM?.message}</div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={data.address}
              {...register("address", {
                onChange: (e) => {
                  setData({ ...data, address: e.target.value });
                },
              })}
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.address?.message}</div>
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              value={data.contact}
              {...register("contact", {
                onChange: (e) => {
                  setData({ ...data, contact: e.target.value });
                },
              })}
              className={`form-control ${errors.contact ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.contact?.message}</div>
          </div>
          <div className="form-group">
            <label>Emergency Contact</label>
            <input
              type="text"
              value={data.emergencyContact}
              {...register("emergencyContact", {
                onChange: (e) => {
                  setData({ ...data, emergencyContact: e.target.value });
                },
              })}
              className={`form-control ${
                errors.emergencyContact ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.emergencyContact?.message}
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
