import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
import AdminLogin from "../components/AdminLogin";
import AdminRegister from "../components/AdminRegister";

function Guest() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/admin-register" element={<AdminRegister/>}/>
        </Routes>
      </div>
    </>
  );
}

export default Guest;
