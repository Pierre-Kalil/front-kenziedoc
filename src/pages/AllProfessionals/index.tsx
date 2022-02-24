import { useProfessional } from "../../context/Professional";
import {
  CardProfessionals,
  ContainerProfessionals,
  ListProfessionals,
} from "./style";
import { FormAppointments } from "../../components/formAppointments";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/States";

export const AllProfessionals = () => {
  const { allProfessional, ListAllProfessional, GetBySpecialty } =
    useProfessional();
  const { setModalAppointment, modalAppointment } = useStateContext();
  const [specialty, setSpecialty] = useState("");

  const handleModal = () => {
    setModalAppointment(true);
  };

  const handleSearch = (specialty: string) => {
    GetBySpecialty(specialty);
  };

  useEffect(() => {
    ListAllProfessional();
  }, []);
  console.log(allProfessional);
  return (
    <>
      <ContainerProfessionals>
        <input
          type="text"
          placeholder="CRM do Médico"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
        <button onClick={() => handleSearch(specialty)}>Pesquisar</button>
        {modalAppointment ? <FormAppointments /> : <></>}
        <ListProfessionals>
          {allProfessional &&
            allProfessional.map((item, index) => (
              <CardProfessionals key={index}>
                <span>{item.name}</span>
                <span>{item.specialty}</span>
                <span>{item.council_number}</span>
                <button onClick={handleModal}>Marcar consulta</button>
              </CardProfessionals>
            ))}
        </ListProfessionals>
      </ContainerProfessionals>
    </>
  );
};
