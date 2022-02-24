import { useProfessional } from "../../context/Professional";
import {
  CardProfessionals,
  ContainerProfessionals,
  ListProfessionals,
} from "./style";
import { FormAppointments } from "../../components/formAppointments";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/States";
import { UserProps } from "../../context/Patient/types";
import { ProfessionalProps } from "../../context/Professional/types";

export const AllProfessionals = () => {
  const { allProfessional, ListAllProfessional, GetBySpecialty } =
    useProfessional();
  const { setModalAppointment, modalAppointment } = useStateContext();
  const [filtered, setFiltered] = useState<ProfessionalProps[]>([]);
  const [search, setSearch] = useState("");
  const [curProf, setCurProf] = useState("");

  const handleModal = (crm: string) => {
    setModalAppointment(true);
    setCurProf(crm!);
  };

  useEffect(() => {
    ListAllProfessional();
    setFiltered(
      allProfessional.filter((item) => {
        const regex = new RegExp(search.toUpperCase(), "g");
        return item.specialty?.toUpperCase().match(regex);
      })
    );
  }, [search]);

  return (
    <>
      <ContainerProfessionals>
        <input
          type="text"
          placeholder="CRM do Médico"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {modalAppointment && <FormAppointments crm={curProf} />}
        <ListProfessionals>
          {filtered.length > 0
            ? filtered.map((item, index) => (
                <CardProfessionals key={index}>
                  <span>{item.name}</span>
                  <span>{item.specialty}</span>
                  <span>{item.council_number}</span>
                  <button onClick={() => handleModal(item.council_number!)}>
                    Marcar consulta
                  </button>
                </CardProfessionals>
              ))
            : allProfessional.map((item, index) => (
                <CardProfessionals key={index}>
                  <span>{item.name}</span>
                  <span>{item.specialty}</span>
                  <span>{item.council_number}</span>
                  <button onClick={() => handleModal(item.council_number!)}>
                    Marcar consulta
                  </button>
                </CardProfessionals>
              ))}
        </ListProfessionals>
      </ContainerProfessionals>
    </>
  );
};
