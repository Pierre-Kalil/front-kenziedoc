import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/formLogin";
import { useAuth } from "../../context/Auth";
import { usePatient } from "../../context/Patient";
import { useProfessional } from "../../context/Professional";
import { ContainerHome } from "./style";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { DeleteProfessional } = useProfessional();
  const { deletePatient } = usePatient();
  return (
    <ContainerHome>
      <section className="userCard">
        {user.isProf ? (
          <>
            <h1>Bem-vindo(a), {user.name.split(" ")[0]}!</h1>
            <p>{user.email}</p>
            <p>{user.council_number}</p>
            <button onClick={() => <ToUpdate user={user} />}>
              Atualizar dados
            </button>
            <button
              onClick={() => DeleteProfessional(user.council_number as string)}
            >
              Deletar conta
            </button>
          </>
        ) : (
          <>
            <h1>Bem-vindo(a), {user.name.split(" ")[0]}!</h1>
            <p>{user.email}</p>
            <p>{user.cpf}</p>
            <button onClick={() => <ToUpdate user={user} />}>
              Atualizar dados
            </button>
            <button onClick={() => deletePatient(user.cpf as string)}>
              Deletar conta
            </button>
          </>
        )}
      </section>
    </ContainerHome>
  );
};
