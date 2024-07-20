

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  async function fetchData() {
    let res = await fetch("http://localhost:3000/user");
    let data = await res.json();
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleLogin() {
    const userFound = users.find(
      (user) => user.user === userName && user.pass === pass
    );

    if (userFound) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
