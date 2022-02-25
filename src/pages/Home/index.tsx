import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/formLogin";
import { useAuth } from "../../context/Auth";
import { ContainerHome } from "./style";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <ContainerHome>
      <h1>Bem vindo(a)</h1>
      <div>{user.name}</div>
      <div>{user.council_number}</div>
      <div>{user.cpf}</div>
      <div>{user.email}</div>
    </ContainerHome>
  );
};
