import React, { useEffect, useState } from "react";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    await axios
      .get("http://34.101.216.127:8000/user", {
        headers: { "x-api-key": "12e5eaed-fa5c-4f8e-8060-6dca533a5d83" },
      })
      .then((response) => {
        setUsers(response.data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  setInterval(getUsers, 10000);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="Subtitle"> List of Users</h2>
      <table className="table is-striped is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>UID</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
