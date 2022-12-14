import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Log from "./pages/Log";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
function App() {
  const isAuth = localStorage.getItem("auth") || false;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Dashboard /> : <Login />} />
          <Route
            path="/dashboard"
            element={isAuth === false ? <Login /> : <Dashboard />}
          />
          <Route
            path="/users"
            element={isAuth === false ? <Login /> : <Users />}
          />
          <Route path="/log" element={isAuth === false ? <Login /> : <Log />} />
          <Route
            path="/users/edit/:id"
            element={isAuth === false ? <Login /> : <EditUser />}
          />
          <Route
            path="/adduser"
            element={isAuth === false ? <Login /> : <AddUser />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
