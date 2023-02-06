import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMedicalRecordState } from "../../config/commonTypes";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../../NavBar";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MedicalRecordValidationSchema as validationSchema } from "../../config/ValidationRules";
import { postMedicalRecord } from "../../services/medicalRecordService";
import initialMedicalRecordValues from "../../config/initialValues/initialMedicalRecordValues";

const App: React.FC = () => {
  const initialValues = initialMedicalRecordValues;

  const [data, setData] = useState(initialValues);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMedicalRecordState["medicalRecordDetails"]>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const submitHandler = () => {
    postMedicalRecord(
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

  const onSubmit = (data: IMedicalRecordState["medicalRecordDetails"]) => {
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
      <h2 className="py-4">Add Medical Record</h2>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Sample Collected Date</label>
            <input
              type="date"
              value={moment(data.SampleCollectedDate).format("YYYY-MM-DD")}
              {...register("SampleCollectedDate", {
                onChange: (e) => {
                  setData({
                    ...data,
                    SampleCollectedDate: moment(e.target.value).toDate(),
                  });
                },
              })}
              className={`form-control ${
                errors.SampleCollectedDate ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.SampleCollectedDate?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Sugar (Mmol)</label>
            <input
              type="number"
              value={data.SugarMmol}
              {...register("SugarMmol", {
                onChange: (e) => {
                  setData({ ...data, SugarMmol: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.SugarMmol ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.SugarMmol?.message}</div>
          </div>

          <div className="form-group">
            <label>Temperature (Celcius)</label>
            <input
              type="number"
              value={data.TemperatureCelcius}
              {...register("TemperatureCelcius", {
                onChange: (e) => {
                  setData({
                    ...data,
                    TemperatureCelcius: parseInt(e.target.value),
                  });
                },
              })}
              className={`form-control ${
                errors.TemperatureCelcius ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.TemperatureCelcius?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Platelet (Mmol)</label>
            <input
              type="number"
              value={data.PlateletMmol}
              {...register("PlateletMmol", {
                onChange: (e) => {
                  setData({ ...data, PlateletMmol: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${
                errors.PlateletMmol ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.PlateletMmol?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Hemoglobin (Gdl)</label>
            <input
              type="number"
              value={data.HemoglobinGdl}
              {...register("HemoglobinGdl", {
                onChange: (e) => {
                  setData({ ...data, HemoglobinGdl: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${
                errors.HemoglobinGdl ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.HemoglobinGdl?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Patient Id</label>
            <input
              type="number"
              value={data.PatientId}
              {...register("PatientId", {
                onChange: (e) => {
                  setData({ ...data, PatientId: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.PatientId ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.PatientId?.message}</div>
          </div>

          <div className="form-group">
            <label>Created Date</label>
            <input
              type="date"
              value={moment(data.Created).format("YYYY-MM-DD")}
              {...register("Created", {
                onChange: (e) => {
                  setData({
                    ...data,
                    Created: moment(e.target.value).toDate(),
                  });
                },
              })}
              className={`form-control ${errors.Created ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.Created?.message}</div>
          </div>

          <div className="form-group">
            <label>Created By</label>
            <input
              type="text"
              value={data.CreatedBy}
              {...register("CreatedBy", {
                onChange: (e) => {
                  setData({ ...data, CreatedBy: e.target.value });
                },
              })}
              className={`form-control ${errors.CreatedBy ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.CreatedBy?.message}</div>
          </div>

          <div className="form-group">
            <label>Last Modified Date</label>
            <input
              type="date"
              value={moment(data.LastModified).format("YYYY-MM-DD")}
              {...register("LastModified", {
                onChange: (e) => {
                  setData({
                    ...data,
                    LastModified: moment(e.target.value).toDate(),
                  });
                },
              })}
              className={`form-control ${
                errors.LastModified ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.LastModified?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Created By</label>
            <input
              type="text"
              value={data.LastModifiedBy}
              {...register("LastModifiedBy", {
                onChange: (e) => {
                  setData({ ...data, LastModifiedBy: e.target.value });
                },
              })}
              className={`form-control ${
                errors.LastModifiedBy ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.LastModifiedBy?.message}
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
