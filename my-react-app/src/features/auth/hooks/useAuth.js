import { useState, useEffect } from "react";

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking authentication status
    setTimeout(() => {
      setUser({ name: "John Doe" }); // Example user
      setLoading(false);
    }, 1000);
  }, []);

  const login = (username) => {
    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setUser({ name: username });
      setLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
}

export default useAuth;
