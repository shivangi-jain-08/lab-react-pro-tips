// src/components/RegistrationForm.jsx
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!form.firstName.trim()) {
      errors.firstName = "Please enter your first name!";
    }

    if (!form.lastName.trim()) {
      errors.lastName = "Please enter your last name!";
    }

    if (!form.email.trim()) {
      errors.email = "Please enter your email!";
    }

    if (!form.mobile.trim() || form.mobile.length !== 10) {
      errors.mobile = "Please enter a valid 10-digit mobile no.!";
    }

    if (Object.keys(errors).length > 0) {
      // Display validation errors
      setValidationErrors(errors);
    } else {
      // If no errors, set success message and clear form
      toast.success("Registration Successful!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // 5 seconds
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={onFormChange}
          />
          <span className="error">{validationErrors.firstName}</span>
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={onFormChange}
          />
          <span className="error">{validationErrors.lastName}</span>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onFormChange}
          />
          <span className="error">{validationErrors.email}</span>
        </label>
        <br />
        <label>
          Mobile No.:
          <input
            type="number"
            name="mobile"
            value={form.mobile}
            onChange={onFormChange}
            placeholder="Enter 10-digit mobile number"
          />
          <span className="error">{validationErrors.mobile}</span>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
