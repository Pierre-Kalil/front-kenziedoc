import { useAuth } from "../../context/Auth";
import { Container, ContainerHome } from "./style";

export const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <ContainerHome>
        {user.isProf ? (
          <>
            <Container>
              <h1>Bem-vindo(a), Dr(a). {user.name.split(" ")[0]}!</h1>
              <p>Email: {user.email}</p>
              <p>CRM: {user.council_number}</p>
            </Container>
          </>
        ) : (
          <>
            <Container>
              <h1>Bem-vindo(a), {user.name.split(" ")[0]}!</h1>
              <p>Email: {user.email}</p>
              <p>CPF: {user.cpf}</p>
            </Container>
          </>
        )}
      </ContainerHome>
    </>
  );
};
