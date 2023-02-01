import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMedicalRecordState } from "../../config/commonTypes";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../../NavBar";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MedicalRecordValidationSchema as validationSchema } from "../../config/ValidationRules";
import { getMedicalRecord, updateMedicalRecord } from "../../services/medicalRecordService";
import { medicalRecordActions } from "../../redux/features/medicalrecord";

const App: React.FC = () => {
  const medicalRecordDetails: IMedicalRecordState["medicalRecordDetails"] =
    useAppSelector((state) => state.medicalRecord.updateMedicalRecordDetails);

  const initialValues = {
    sampleCollectedDate: medicalRecordDetails.sampleCollectedDate,
    sugarMmol: medicalRecordDetails.sugarMmol,
    temperatureCelcius: medicalRecordDetails.temperatureCelcius,
    plateletMmol: medicalRecordDetails.plateletMmol,
    hemoglobinGdl: medicalRecordDetails.hemoglobinGdl,
    patientId: medicalRecordDetails.patientId,
    created: medicalRecordDetails.created,
    createdBy: medicalRecordDetails.createdBy,
    lastModified: medicalRecordDetails.lastModified,
    lastModifiedBy: medicalRecordDetails.lastModifiedBy,
    id: medicalRecordDetails.id,
  };

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
  const dispatch = useAppDispatch();

  const submitHandler = () => {
    updateMedicalRecord(
      data,
      (successData: any) => {
        getMedicalRecord(
            data.id,
            (successData: any) => {
              dispatch(medicalRecordActions.getMedicalRecord(successData));
              navigate("/medicalrecords");
            },
            (errorData: any) => console.log(errorData)
          );
        navigate("/medicalrecords");
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
      <h2 className="py-4">Update Medical Record</h2>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Sample Collected Date</label>
            <input
              type="date"
              value={moment(data.sampleCollectedDate).format("YYYY-MM-DD")}
              {...register("sampleCollectedDate", {
                onChange: (e) => {
                  setData({
                    ...data,
                    sampleCollectedDate: moment(e.target.value).toDate(),
                  });
                },
              })}
              className={`form-control ${
                errors.sampleCollectedDate ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.sampleCollectedDate?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Sugar (Mmol)</label>
            <input
              type="number"
              value={data.sugarMmol}
              {...register("sugarMmol", {
                onChange: (e) => {
                  setData({ ...data, sugarMmol: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.sugarMmol ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.sugarMmol?.message}</div>
          </div>

          <div className="form-group">
            <label>Temperature (Celcius)</label>
            <input
              type="number"
              value={data.temperatureCelcius}
              {...register("temperatureCelcius", {
                onChange: (e) => {
                  setData({
                    ...data,
                    temperatureCelcius: parseInt(e.target.value),
                  });
                },
              })}
              className={`form-control ${
                errors.temperatureCelcius ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.temperatureCelcius?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Platelet (Mmol)</label>
            <input
              type="number"
              value={data.plateletMmol}
              {...register("plateletMmol", {
                onChange: (e) => {
                  setData({ ...data, plateletMmol: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${
                errors.plateletMmol ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.plateletMmol?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Hemoglobin (Gdl)</label>
            <input
              type="number"
              value={data.hemoglobinGdl}
              {...register("hemoglobinGdl", {
                onChange: (e) => {
                  setData({ ...data, hemoglobinGdl: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${
                errors.hemoglobinGdl ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.hemoglobinGdl?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Patient Id</label>
            <input
              type="number"
              value={data.patientId}
              {...register("patientId", {
                onChange: (e) => {
                  setData({ ...data, patientId: parseInt(e.target.value) });
                },
              })}
              className={`form-control ${errors.patientId ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.patientId?.message}</div>
          </div>

          <div className="form-group">
            <label>Created Date</label>
            <input
              type="date"
              value={moment(data.created).format("YYYY-MM-DD")}
              {...register("created", {
                onChange: (e) => {
                  setData({
                    ...data,
                    created: moment(e.target.value).toDate(),
                  });
                },
              })}
              className={`form-control ${errors.created ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.created?.message}</div>
          </div>

          <div className="form-group">
            <label>Created By</label>
            <input
              type="text"
              value={data.createdBy}
              {...register("createdBy", {
                onChange: (e) => {
                  setData({ ...data, createdBy: e.target.value });
                },
              })}
              className={`form-control ${errors.createdBy ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.createdBy?.message}</div>
          </div>

          <div className="form-group">
            <label>Last Modified Date</label>
            <input
              type="date"
              value={moment(data.lastModified).format("YYYY-MM-DD")}
              {...register("lastModified", {
                onChange: (e) => {
                  setData({
                    ...data,
                    lastModified: moment(e.target.value).toDate(),
                  });
                },
              })}
              className={`form-control ${
                errors.lastModified ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.lastModified?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Created By</label>
            <input
              type="text"
              value={data.lastModifiedBy}
              {...register("lastModifiedBy", {
                onChange: (e) => {
                  setData({ ...data, lastModifiedBy: e.target.value });
                },
              })}
              className={`form-control ${
                errors.lastModifiedBy ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.lastModifiedBy?.message}
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
