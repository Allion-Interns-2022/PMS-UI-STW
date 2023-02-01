import NavBar from "../../NavBar";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "react-bootstrap";
import { getPatient, updatePatient } from "../../services/patientService";
import { IPatientState } from "../../config/commonTypes";
import { useState } from "react";
import { patientActions } from "../../redux/features/patient";
import moment from "moment";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import errorMessages from "../../config/errorMessages";
import { yupResolver } from "@hookform/resolvers/yup";
import initialPatientValues from "../../config/initialValues/initialPatientValues";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  dob: Yup.date()
    .max(new Date(), "Date of birth must be before today")
    .required("Date of birth is required"),
  weightKG: Yup.number()
    .positive("Weight must be a positive number")
    .required("Weight is required"),
  heightCM: Yup.number()
    .positive("Height must be a positive number")
    .required("Height is required"),
  address: Yup.string().required("Address is required"),
  contact: Yup.string()
    .min(10, "Contact must have at least 10 characters")
    .required("Contact is required"),
  emergencyContact: Yup.string()
    .min(10, "Emergency contact must have at least 10 characters")
    .notOneOf([
      Yup.ref("contact"),
      "Emergency contact must not be the same as contact",
    ])
    .required("Emergency contact is required"),
});

export default function UpdatePatientHookForms() {
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

  const submitHandler = () => {
    updatePatient(
      data,
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialPatientValues,
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
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

      {/* initialValues={initialValues}
        
        onSubmit={(
          values: IPatientState["patientDetails"],
          { setSubmitting }: FormikHelpers<IPatientState["patientDetails"]>
        ) => {
          setSubmitting(false);
          submitHandler();
        }} */}

      <form id="contact-form" onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <InputField
            variant="outlined"
            label="Name"
            inputRef={register}
            error={errors.name}
            isFocus
            className="form-control"
            type="text"
            placeholder="Enter name"
            value={data.name}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, name: e.target.value })
            }
            id="name"
            name="name"
          />
          {/* {errors.name && (
            <div className="invalid-feedback">{errorMessages.name}</div>
          )} */}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="dob">Date of Birth</label>
          <InputField
            variant="outlined"
            label="Date of Birth"
            inputRef={register}
            error={errors.dob}
            className="form-control"
            type="date"
            placeholder="Date of Birth"
            value={moment(data.dob).format("YYYY-MM-DD")}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, dob: moment.utc(e.target.value).toDate() })
            }
            id="dob"
            name="dob"
          />
          {/* {errors.dob && (
            <div className="invalid-feedback">{errorMessages.dob}</div>
          )} */}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="weight">Weight (kg)</label>
          <InputField
            variant="outlined"
            label="Weight"
            inputRef={register}
            error={errors.weightKG}
            className="form-control"
            type="number"
            placeholder="Enter weight"
            id="weight"
            name="weightKG"
            value={data.weightKG}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, weightKG: parseInt(e.target.value) })
            }
          />
          {/* {errors.weightKG && (
            <div className="invalid-feedback">{errorMessages.weight}</div>
          )} */}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="height">Height (cm)</label>
          <InputField
            variant="outlined"
            label="Height"
            inputRef={register}
            error={errors.heightCM}
            className="form-control"
            type="number"
            placeholder="Enter height"
            id="height"
            name="heightCM"
            value={data.heightCM}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, heightCM: parseInt(e.target.value) })
            }
          />
          {/* {errors.heightCM && (
            <div className="invalid-feedback">{errorMessages.height}</div>
          )} */}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="address">Address</label>
          <InputField
            label="Address"
            variant="outlined"
            inputRef={register}
            error={errors.address}
            className="form-control"
            type="text"
            placeholder="Enter address"
            id="address"
            name="address"
            value={data.address}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, address: e.target.value })
            }
          />
          {/* {errors.address && (
            <div className="invalid-feedback">{errorMessages.address}</div>
          )} */}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="contact">Contact</label>
          <InputField
            variant="outlined"
            label="Contact"
            inputRef={register}
            error={errors.contact}
            className="form-control"
            type="text"
            placeholder="Enter contact"
            id="contact"
            name="contact"
            value={data.contact}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, contact: e.target.value })
            }
          />
          {/* {errors.contact && (
            <div className="invalid-feedback">{errorMessages.contact}</div>
          )} */}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="emergencycontact">Emergency Contact</label>
          <InputField
            variant="outlined"
            label="Emergency Contact"
            inputRef={register}
            error={errors.emergencyContact}
            className="form-control"
            type="text"
            placeholder="Enter emergency contact"
            id="emergencycontact"
            name="emergencyContact"
            value={data.emergencyContact}
            onChange={(e: { target: { value: any } }) =>
              setData({ ...data, emergencyContact: e.target.value })
            }
          />
          {/* {errors.emergencyContact && (
            <div className="invalid-feedback">
              {errorMessages.emergencycontact}
            </div>
          )} */}
        </div>

        <div className="d-grid gap-4">
          <button className="btn btn-primary my-3" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

const InputField = (
  inputRef: any,
  name: string,
  variant: "standard" | "filled" | "outlined" | undefined,
  label: string,
  type: string = "text",
  error: { message: string },
  isFocus: boolean,
  fullWidth: boolean
) => {
  return (
    <TextField
      name={name}
      type={type}
      variant={variant}
      label={label}
      inputRef={inputRef}
      helperText={error?.message}
      error={!!error?.message}
      autoFocus={isFocus}
      fullWidth={fullWidth}
    />
  );
};
