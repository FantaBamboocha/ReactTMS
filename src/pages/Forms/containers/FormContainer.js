import { useState } from "react";

import useForm from "../../../hooks/useForm";

const FormContainer = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const handlePasswordChange = (event) => {
  //     setPassword(event.target.value);
  //   };
  // ----------------------------------------------------------
  //   const [form, setForm] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleFormChange = (event) => {
  //     const { name, value } = event.target;

  //     setForm((state) => ({
  //       ...state,
  //       [name]: value,
  //     }));
  //   };

  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const [checked, setChecked] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleCheckboxToggle = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxToggle}
        />
      </form>
    </>
  );
};

export default FormContainer;
