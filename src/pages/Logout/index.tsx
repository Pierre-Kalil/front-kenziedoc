import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/States";

export const Logout = () => {
  const navigate = useNavigate();
  const { setPageToLoad } = useStateContext();
  const handleLogout = () => {
    localStorage.clear();
    setPageToLoad("Home");
    navigate("/login");
  };

  return (
    <div>
      <h2>Deseja mesmo sair?</h2>
      <button onClick={handleLogout}>Sim</button>
    </div>
  );
};
