import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import AllPatients from "./pages/Patient/AllPatients";
import AddPatient from "./pages/Patient/AddPatient";
import UpdatePatient from "./pages/Patient/UpdatePatient";
import { RouteProps } from "react-router-dom";
import { useAppSelector } from "./redux/app/hooks";
import MedicalRecord from "./pages/MedicalRecord/MedicalRecord";
import UpdateMedicalRecord from "./pages/MedicalRecord/UpdateMedicalRecord";
import AddMedicalRecord from "./pages/MedicalRecord/AddMedicalRecord";

const RoutePaths = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return (
    <Routes>
      {!isAuthenticated && <Route path="*" element={<SignIn />} />}

      {isAuthenticated && <Route path="/" element={<AllPatients />} />}
      {isAuthenticated && (<Route path="/allpatients" element={<AllPatients />} />)}
      {isAuthenticated && <Route path="/addpatient" element={<AddPatient />} />}
      {isAuthenticated && (<Route path="/updatepatient" element={<UpdatePatient />} />)}
      {isAuthenticated && (<Route path="/medicalrecords" element={<MedicalRecord />} />)}
      {isAuthenticated && (<Route path="/updatemedicalrecord" element={<UpdateMedicalRecord />} />)}
      {isAuthenticated && (<Route path="/addmedicalrecord" element={<AddMedicalRecord />} />)}
    </Routes>
  );
};

export default RoutePaths;
