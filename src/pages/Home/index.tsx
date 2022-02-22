import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/formLogin";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};
