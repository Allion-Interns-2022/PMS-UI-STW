import NavBar from "../../NavBar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postPatient } from "../../services/patientService";
import moment from "moment";
import { IPatientState } from "../../config/commonTypes";
import initialPatientValues from "../../config/initialValues/initialPatientValues";
import { PatientValidationSchema as validationSchema } from "../../config/ValidationRules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const navigate = useNavigate();

  const submitHandler = () => {
    postPatient(
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

  const [data, setData] =
    useState<IPatientState["patientDetails"]>(initialPatientValues);

  const onSubmit = (data: IPatientState["patientDetails"]) => {
    submitHandler();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPatientState["patientDetails"]>({
    resolver: yupResolver(validationSchema),
  });

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
      <h2 className="py-4">Add Patient</h2>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={data.Name}
              {...register("Name", {
                onChange: (e) => {
                  setData({ ...data, Name: e.target.value });
                },
              })}
              className={`form-control ${errors.Name ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.Name?.message}</div>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={moment(data.DOB).format("YYYY-MM-DD")}
              {...register("DOB", {
                onChange: (e) => {
                  setData({ ...data, DOB: moment(e.target.value).toDate() });
                },
              })}
              className={`form-control ${errors.DOB ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.DOB?.message}</div>
          </div>

          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              value={data.WeightKG}
              {...register("WeightKG", {
                onChange: (e) => {
                  setData({ ...data, WeightKG: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.WeightKG ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.WeightKG?.message}</div>
          </div>

          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              value={data.HeightCM}
              {...register("HeightCM", {
                onChange: (e) => {
                  setData({ ...data, HeightCM: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.HeightCM ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.HeightCM?.message}</div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={data.Address}
              {...register("Address", {
                onChange: (e) => {
                  setData({ ...data, Address: e.target.value });
                },
              })}
              className={`form-control ${errors.Address ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.Address?.message}</div>
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              value={data.Contact}
              {...register("Contact", {
                onChange: (e) => {
                  setData({ ...data, Contact: e.target.value });
                },
              })}
              className={`form-control ${errors.Contact ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.Contact?.message}</div>
          </div>
          <div className="form-group">
            <label>Emergency Contact</label>
            <input
              type="text"
              value={data.EmergencyContact}
              {...register("EmergencyContact", {
                onChange: (e) => {
                  setData({ ...data, EmergencyContact: e.target.value });
                },
              })}
              className={`form-control ${
                errors.EmergencyContact ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.EmergencyContact?.message}
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

export default AddPatient;
