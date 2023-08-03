import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "./redux/dataSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  return (
    <div className="hero container-sm">
      <h1 className="my-2">React CRUD App with Redux</h1>

      <Link to={"/create"}>
        <button className="btn btn-success my-3">Create</button>
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>
                <h3 className="my-4">No Data</h3>
              </td>
            </tr>
          ) : (
            data.map((field, ind) => {
              return (
                <tr key={ind}>
                  <td>{ind + 1}.</td>
                  <td>{field.name}</td>
                  <td>{field.email}</td>
                  <td>
                    <Link to={`/edit/${field.id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>

                    <button
                      onClick={() => dispatch(del(field.id))}
                      className="btn btn-danger mx-3"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Hero;
