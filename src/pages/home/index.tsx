import { ContainerHome } from "./style";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/formLogin";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <ContainerHome>
      {/* <h1>KenzieDoc</h1>
      <div>
        <button onClick={() => navigate("/registermain")}>Registrar</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div> */}
      <FormLogin />
    </ContainerHome>
  );
};
