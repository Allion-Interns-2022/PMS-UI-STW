import "./App.css";
import { useAppSelector } from "./redux/app/hooks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import AllPatients from "./pages/Patient/AllPatients";
import AddPatient from "./pages/Patient/AddPatient";
import UpdatePatient from "./pages/Patient/UpdatePatient";
import RoutePaths from "./routes";

function App() {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return <RoutePaths />;
}

export default App;
