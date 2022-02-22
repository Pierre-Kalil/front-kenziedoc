import { ContainerHome } from "./style";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/formLogin";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <ContainerHome>
      <FormLogin />
    </ContainerHome>
  );
};
