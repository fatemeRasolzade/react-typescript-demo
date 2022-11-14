import { useState } from "react";

const LoggedIn = () => {
  //note* : if you setIsLoggedIn number or string ts return to you error but js not return error and let you set any types of props
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {IsLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
