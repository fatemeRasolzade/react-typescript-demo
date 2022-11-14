import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Fateme",
      email: "fatemerasolzade.1424@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {user?.name && user.email ? (
        <>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </>
      ) : (
        <div>There is any user</div>
      )}
    </div>
  );
};

export default User;
