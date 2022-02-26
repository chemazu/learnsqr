import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import UserDetail from "./view/UserDetail";
import User from "./view/User";
import Header from "./components/Header";
import users from "./resource/user.json";


function App() {
  localStorage.setItem("users", JSON.stringify(users));
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdetail/:id" element={<UserDetail />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
