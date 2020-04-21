import React, { useState } from "react";
import "./SignUpForm.css";

interface FormState {
  [key: string]: string;
}

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialErrors: FormState = {};

const SignUpForm = () => {
  const [state, setState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);

  const onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"] = (
    event
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const isValidEmail = (value: string) => value.includes("@");
  const validate: React.DOMAttributes<HTMLInputElement>["onBlur"] = (event) => {
    const field = state[event.target.name];
    const value = event.target.value;

    console.log(field, value);

    switch (field) {
      case "email":
        const isValid = isValidEmail(value);
        if (!isValid) {
          setErrors({ ...errors, email: "Invalid email" });
        }
        break;

      default:
        break;
    }
  };

  const onSubmit: React.DOMAttributes<HTMLFormElement>["onSubmit"] = (
    event
  ) => {
    event.preventDefault();
    setState(initialFormState);
    console.log(state);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        onBlur={validate}
        name="firstName"
        value={state["firstName"]}
      />
      <input
        onChange={onChange}
        onBlur={validate}
        name="lastName"
        value={state["lastName"]}
      />

      <input
        onChange={onChange}
        onBlur={validate}
        name="email"
        value={state["email"]}
      />
      {errors?.email ? <span>{errors.email}</span> : null}
      <input
        onChange={onChange}
        onBlur={validate}
        name="password"
        value={state["password"]}
      />
      <input value="Submit" onBlur={validate} type="submit" />
    </form>
  );
};

export default SignUpForm;
