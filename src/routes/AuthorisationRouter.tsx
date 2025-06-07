import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { getAuthUser } from "../api/getAuth";
import { useEffect } from "react";
import { useState } from "react";
import { APP_ROUTES } from "../constants";

export function AuthorisationRouter() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    getAuthUser(JSON.parse(token))
      .then((user) => setUser(user))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return;
  if (!user || !user.username) {
    return <Navigate to={APP_ROUTES.LOGIN} replace />;
  }
  return <Outlet />;
}