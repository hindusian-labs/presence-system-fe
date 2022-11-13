import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://34.101.216.127:8000/user", {
      headers: { "x-api-key": apiKey },
    });
    setUsers(response.data["data"]);
  };
  const deleteUser = async (userId) => {
    await axios.delete(`http://34.101.216.127:8000/user/${userId}`, {
      headers: { "x-api-key": apiKey },
    });
    getUsers();
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link
                  to={`/users/edit/${user.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
