import NavBar from "../../NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "react-bootstrap";
import { postPatient } from "../../services/patientService";

const AddPatient = () => {
  const dispatch = useAppDispatch();

  const form = document.getElementById("contact-form");

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     const myFormData = new FormData(e.target);

  //     const formDataObj = Object.fromEntries(myFormData.entries());

  //     console.log(JSON.stringify(formDataObj, null, 2));

  //   });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const myFormData = new FormData(event.currentTarget);

    const formDataObj: any = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    postPatient(
      formDataObj,
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

    

    // return(createPatient(formDataObj));
    // console.log(formDataObj);
  };

  // const createPatient = (formDataObj: PatientState["value"]) => {

  // };

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
      <Form id="contact-form" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date of Birth"
            id="dob"
            name="dob"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter weight"
            id="weight"
            name="weightKG"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Height (cm)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter height"
            id="height"
            name="heightCM"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            id="address"
            name="address"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact"
            id="contact"
            name="contact"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Emergency Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter emergency contact"
            id="emergencycontact"
            name="emergencyContact"
          />
        </Form.Group>
        <div className="d-grid gap-4">
          <Button variant="primary" className="my-3" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddPatient;
