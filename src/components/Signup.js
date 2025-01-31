import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.error(json.success, "checkinggggggggggggggggggggggggggggggg");
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="your name"
          onChange={onChange}
          value={credentials.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
          onChange={onChange}
          value={credentials.email}
          autoComplete="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="password"
          onChange={onChange}
          value={credentials.password}
          autoComplete="current-password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="cpassword"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={onChange}
          value={credentials.cpassword}
          autoComplete="new-password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
