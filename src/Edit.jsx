import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "./redux/dataSlice";

const Edit = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [info, setInfo] = useState(() => {
    const element = data.find((a) => {
      return a.id === id;
    });

    return {
      name: element.name,
      email: element.email,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      edit({
        ...info,
        id,
      })
    );
    navigate("/");
  };

  return (
    <div className="create" style={{ width: "500px" }}>
      <h2>Edit Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
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
            name="email"
            value={info.email}
            className="form-control"
            id="email"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit Data
        </button>
        <button type="submit" className="mx-4 btn btn-warning">
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Edit;
