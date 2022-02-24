import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import UserDetail from "./view/UserDetail";
import User from "./view/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdetail" element={<UserDetail />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
