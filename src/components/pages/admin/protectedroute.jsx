import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("adminAuth") === "true";
  return loggedIn ? children : <Navigate to="/" replace />;
}
