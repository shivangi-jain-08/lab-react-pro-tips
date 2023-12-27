import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contacts: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contacts: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setRegistrationSuccess(false); 
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

    if (!form.contacts.trim()) {
      errors.contacts = "Please enter your contacts!";
    }

    if (Object.keys(errors).length > 0) {
      // Display validation errors
      setValidationErrors(errors);
    } else {
      // If no errors, set success message and clear form
      setRegistrationSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        contacts: "",
      });

    
    }
  };

  return (
    <div>
      {registrationSuccess && (
        <div
          style={{
            backgroundColor: "#5cb85c",
            color: "white",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          Registration Successful!
        </div>
      )}
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
          Contacts:
          <input
            type="text"
            name="contacts"
            value={form.contacts}
            onChange={onFormChange}
          />
          <span className="error">{validationErrors.contacts}</span>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
