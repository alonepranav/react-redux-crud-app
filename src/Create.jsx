import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "./redux/dataSlice";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.name.trim() && info.email.trim()) {
      dispatch(
        add({
          ...info,
        })
      );
      navigate("/");
    }
  };

  return (
    <div className="create" style={{ width: "500px" }}>
      <h2>Create Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={info.name}
            className="form-control"
            id="name"
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={info.email}
            className="form-control"
            id="email"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Data
        </button>

        <button
          type="submit"
          onClick={() => navigate("/")}
          className="mx-4 btn btn-warning"
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Create;
