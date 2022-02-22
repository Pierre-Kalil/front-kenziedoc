import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("@kenzieDoc:token");
    localStorage.removeItem("@kenzieDoc:userBy");
    navigate("/login");
  };

  return (
    <div>
      <h2>Deseja mesmo sair?</h2>
      <button onClick={handleLogout}>Sim</button>
    </div>
  );
};
