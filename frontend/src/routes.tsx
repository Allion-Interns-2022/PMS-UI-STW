import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import AllPatients from "./pages/Patient/AllPatients";
import AddPatient from "./pages/Patient/AddPatient";
import UpdatePatient from "./pages/Patient/UpdatePatient";
import MedicalRecord from "./pages/MedicalRecord/MedicalRecord";
import UpdateMedicalRecord from "./pages/MedicalRecord/UpdateMedicalRecord";
import AddMedicalRecord from "./pages/MedicalRecord/AddMedicalRecord";

const RoutePaths = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated") || "false");

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
