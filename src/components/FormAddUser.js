import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const { state } = useLocation();
  const { uid } = state || "";
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "";
  axios.defaults.baseURL = apiBaseUrl;
  axios.defaults.headers.common["X-Api-key"] = apiKey;

  useEffect(() => {
    if (uid) {
      setId(uid);
    }
  });
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      var body = { id: id, name: name };
      await axios.post("user", body);
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Add New User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">ID</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
