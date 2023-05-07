import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { addToForm } from "../utils/appSlice";
const ContactUs = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  function submit() {
    if (name && query && validateEmail(email)) {
      dispatch(addToForm({ name: name, email: email, query: query }));
      alert("Submitted");
      setName("");
      setEmail("");
      setQuery("");
    }
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5 form-control-lg ">
        ContactUs
      </div>
      <div className="ms-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="m-4 form-control bg-light "
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="m-4 form-control bg-light "
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Query"
          className="m-4 form-control bg-light "
        />

        <button className="ms-4 btn btn-primary" onClick={() => submit()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ContactUs;
