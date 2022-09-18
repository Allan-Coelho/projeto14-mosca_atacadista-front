import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function verifyAuthentication() {
  const userLocalStorage = localStorage.getItem("user");

  if (userLocalStorage === null) {
    return false;
  }
  return true;
}

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    verifyAuthentication()
  );

  useEffect(() => {
    if (!isAuthenticated) {
      setIsAuthenticated(false);
      console.log("Rota protegida, usuário não autorizado.");
      navigate("/");
    }
  }, []);

  return isAuthenticated ? children : <></>;
}
