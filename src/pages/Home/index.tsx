import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundModal from "../../components/backgroundModal";
import { FormLogin } from "../../components/formLogin";
import { FormUpdatePatient } from "../../components/formUpdatePatient";
import { FormUpdateProfessional } from "../../components/formUpdateProfessional";
import { useAuth } from "../../context/Auth";
import { usePatient } from "../../context/Patient";
import { useProfessional } from "../../context/Professional";
import { Container, ContainerHome } from "./style";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <ContainerHome>
        {user.isProf ? (
          <>
            <Container>
              <h1>Bem-vindo(a), Dr(a). {user.name.split(" ")[0]}!</h1>
              <p>{user.email}</p>
              <p>{user.council_number}</p>
              <button onClick={openModal}>Atualizar dados</button>
            </Container>
            {/* <BackgroundModal
            children={<FormUpdateProfessional close={closeModal} />}
            modal={modal}
          ></BackgroundModal> */}
            <FormUpdateProfessional close={closeModal} />
          </>
        ) : (
          <>
            <Container>
              <h1>Bem-vindo(a), {user.name.split(" ")[0]}!</h1>
              <p>{user.email}</p>
              <p>{user.cpf}</p>
              <button onClick={openModal}>Atualizar dados</button>
            </Container>
            {/* <BackgroundModal>
              <FormUpdatePatient close={closeModal} />
            </BackgroundModal> */}
          </>
        )}
      </ContainerHome>
    </>
  );
};
