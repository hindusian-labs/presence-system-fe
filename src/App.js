import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Log from "./pages/Log";
function App() {
  // const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth") || false;
  console.log(isAuth);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
