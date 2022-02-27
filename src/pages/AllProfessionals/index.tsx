import { useProfessional } from "../../context/Professional";
import { ContainerProfessionals, ListProfessionals } from "./style";
import { FormAppointments } from "../../components/formAppointments";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/States";
import { UserProps } from "../../context/Patient/types";
import { ProfessionalProps } from "../../context/Professional/types";
import { Card } from "../../components/card";

export const AllProfessionals = () => {
  const { allProfessional, ListAllProfessional, GetBySpecialty } =
    useProfessional();
  const { setModalAppointment, modalAppointment } = useStateContext();
  const [filtered, setFiltered] = useState<ProfessionalProps[]>([]);
  const [search, setSearch] = useState("");
  const [crm, setCrm] = useState<string | undefined>("");

  const handleModal = (crm: string | undefined) => {
    setCrm(crm);
    setModalAppointment(true);
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
          placeholder="Especialidade do Médico"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {modalAppointment ? <FormAppointments crm={crm} /> : <></>}
        <ListProfessionals>
          {filtered.length > 0
            ? filtered.map((item, index) => (
                <Card
                  key={index}
                  person={item}
                  callback={() => handleModal(item.council_number)}
                />
              ))
            : allProfessional.map((item, index) => (
                <Card key={index} person={item} />
              ))}
        </ListProfessionals>
      </ContainerProfessionals>
    </>
  );
};
