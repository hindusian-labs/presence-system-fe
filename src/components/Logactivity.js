import React, { useEffect, useState } from "react";
import axios from "axios";

const LogActivity = () => {
  const [logActivity, setUsers] = useState([]);

  useEffect(() => {
    getLogActivity();
  }, []);
  const getLogActivity = async () => {
    await axios
      .get("http://34.101.216.127:8000/check", {
        headers: { "x-api-key": "12e5eaed-fa5c-4f8e-8060-6dca533a5d83" },
      })
      .then((response) => {
        setUsers(response.data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  setInterval(getLogActivity, 10000);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="Subtitle">Log Activity</h2>
      <table className="table is-striped is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>UID</th>
            <th>Masuk</th>
            <th>Keluar</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {logActivity.map((logActivity, index) => (
            <tr key={logActivity.userId}>
              <td>{index + 1}</td>
              <td>{logActivity.userId}</td>
              <td>{logActivity.in}</td>
              <td>{logActivity.out}</td>
              <td>{logActivity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogActivity;
