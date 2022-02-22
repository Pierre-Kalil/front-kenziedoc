import { useProfessional } from "../../context/Professional";
import { CardProfessionals, ContainerProfessionals } from "./style";
import { FormAppointments } from "../../components/formAppointments";
import { useState } from "react";
import { useStateContext } from "../../context/States";

export const AllProfessionals = () => {
  const { allProfessional } = useProfessional();
  const { setModalAppointment, modalAppointment } = useStateContext();

  const handleModal = () => {
    setModalAppointment(true);
  };

  return (
    <>
      <h1>Medicos</h1>
      <ContainerProfessionals>
        {modalAppointment ? <FormAppointments /> : <></>}
        {allProfessional &&
          allProfessional.map((item, index) => (
            <CardProfessionals key={index}>
              <span>{item.name}</span>
              <span>{item.specialty}</span>
              <span>{item.council_number}</span>
              <button onClick={handleModal}>Marcar consulta</button>
            </CardProfessionals>
          ))}
      </ContainerProfessionals>
    </>
  );
};
