// import NavBar from "../../NavBar";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
// import { useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Toast } from "react-bootstrap";
// import { getPatient, updatePatient } from "../../services/patientService";
// import { IPatientState } from "../../config/commonTypes";
// import { useState } from "react";
// import { patientActions } from "../../redux/features/patient";
// import moment from "moment";


// const UpdatePatient = () => {
//   const [data, setData] = useState({
//     id: 0,
//     name: "",
//     dob: new Date(),
//     weightKG: 0,
//     heightCM: 0,
//     address: "",
//     contact: "",
//     emergencyContact: "",
//   });

//   const patientId = useAppSelector((state) => state.patient.updatePatientId);

//   useEffect(() => {
//     console.log("patientid is ", patientId);
//     patientId != 0 &&
//       getPatient(
//         patientId,
//         (successData: any) => {
//           setData(successData);
//           console.log("successdata", successData);
//           console.log("data", data);
//         },
//         (errorData: any) => console.log(errorData)
//       );
//   }, [patientId]);

//   const form = document.getElementById("contact-form");

//   const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // const myFormData = new FormData(event.currentTarget);

//     const formDataObj: any = Object.fromEntries(
//       new FormData(event.currentTarget).entries()
//     );

//     updatePatient(
//       formDataObj,
//       (successData: any) =>
//         toast.success(successData, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: true,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         }),
//       (errorData: any) => console.log(errorData)
//     );

//     // return(createPatient(formDataObj));
//     // console.log(formDataObj);
//     //create formik form with yup validation to updatePatient
//   };
//   //todo validation react-hook-forms with yup
//   return (
//     <div>
//       <NavBar />
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss={false}
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <h2 className="py-4">Add Patient</h2>
//       {data.id != 0 && (
//         <Form id="contact-form" onSubmit={submitHandler}>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               value={data.name}
//               onChange={(e) => setData({ ...data, name: e.target.value })}
//               id="name"
//               name="name"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Date of Birth</Form.Label>
//             <Form.Control
//               type="date"
//               placeholder="Date of Birth"
//               value={data.dob.toISOString().substring(0, 10)}
//               onChange={(e) =>
//                 setData({ ...data, dob: moment(e.target.value).toDate() })
//               }
//               id="dob"
//               name="dob"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Weight (kg)</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter weight"
//               id="weight"
//               name="weightKG"
//               value={data.weightKG}
//               onChange={(e) =>
//                 setData({ ...data, weightKG: parseInt(e.target.value) })
//               }
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Height (cm)</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter height"
//               id="height"
//               name="heightCM"
//               value={data.heightCM}
//               onChange={(e) =>
//                 setData({ ...data, heightCM: parseInt(e.target.value) })
//               }
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter address"
//               id="address"
//               name="address"
//               value={data.address}
//               onChange={(e) => setData({ ...data, address: e.target.value })}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Contact</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter contact"
//               id="contact"
//               name="contact"
//               value={data.contact}
//               onChange={(e) => setData({ ...data, contact: e.target.value })}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Emergency Contact</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter emergency contact"
//               id="emergencycontact"
//               name="emergencyContact"
//               value={data.emergencyContact}
//               onChange={(e) =>
//                 setData({ ...data, emergencyContact: e.target.value })
//               }
//             />
//           </Form.Group>
//           <div className="d-grid gap-4">
//             <Button variant="primary" className="my-3" type="submit">
//               Save
//             </Button>
//           </div>
//         </Form>
//       )}
//     </div>
//   );
// };

// export default UpdatePatient;

export {}