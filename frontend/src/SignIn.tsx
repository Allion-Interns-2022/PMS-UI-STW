import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";
import React, { ChangeEvent } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useAppDispatch } from "./redux/app/hooks";
import { userActions } from "./redux/features/user";
import { signIn } from "./services/userService";
import initialUserValues from "./config/initialValues/initialUserValues";
import { IUserState } from "./config/commonTypes";
import { useNavigate } from "react-router-dom";

const SignIn = (props: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
    setData({ ...data, username: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
    setData({ ...data, password: event.target.value });
  };

  const [data, setData] =
    useState<IUserState["userDetails"]>(initialUserValues);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn(
      data,
      (successData: any) => {
        localStorage.setItem("user", successData);
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        dispatch(userActions.login(successData));
        navigate("/");
        window.location.reload();
      },
      (errorData: any) => console.log(errorData)
    );
  };

  return (
    <div className="form-signin w-100 m-auto d-flex align-items-center">
      <Form
        onSubmit={submitHandler}
        style={{ width: "18rem" }}
        className="m-auto"
      >
        <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
        <Form.Group className="mb-3 w-10" controlId="formBasicUsername">
          <Form.Control
            onChange={usernameChangeHandler}
            value={enteredUsername}
            className="mb-3 w-100"
            type="text"
            placeholder="Username"
            autoComplete="on"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <Form.Control
            onChange={passwordChangeHandler}
            value={enteredPassword}
            className="form-control"
            type="password"
            placeholder="Password"
            autoComplete="on"
          />
        </Form.Group>
        <Button
          className="w-100 btn btn-lg btn-primary"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
