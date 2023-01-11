import "./App.css";
import { useAppSelector } from "./redux/app/hooks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import AllPatients from "./pages/Patient/AllPatients";
import AddPatient from "./pages/Patient/AddPatient";
import UpdatePatient from "./pages/Patient/UpdatePatient";

function App() {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return (
    <div>
      {/* {!isAuthenticated && <Navigate to="/" />} */}
      <BrowserRouter>
        <div className="context">
          {/* TODO routes file */}
          <Routes>
            {!isAuthenticated && <Route path="*" element={<SignIn />} />}
            {/* {!isAuthenticated && <Route path="/" element={<SignIn />} />} */}
            {isAuthenticated && <Route path="/" element={<AllPatients />} />}
            {isAuthenticated && (
              <Route path="/allpatients" element={<AllPatients />} />
            )}
            {isAuthenticated && (
              <Route path="/addpatient" element={<AddPatient />} />
            )}
            {isAuthenticated && (
              <Route path="/updatepatient" element={<UpdatePatient />} />
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
