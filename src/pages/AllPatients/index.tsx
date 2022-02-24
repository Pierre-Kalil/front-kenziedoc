import { useEffect, useState } from "react";
import { useAppointment } from "../../context/Appointments";
import { ContainerPatient, BoxPatient, CardPatient } from "./style";

export const AllPatients = () => {
  const { appointmentPatient, filterPatient } = useAppointment();
  const [cpf, setCpf] = useState("");

  const handleSearch = () => {
    filterPatient(cpf);
  };

  return (
    <ContainerPatient>
      <div>
        <input
          type="text"
          placeholder="CPF do paciente"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      <BoxPatient>
        {appointmentPatient &&
          appointmentPatient.map((item, index) => (
            <CardPatient>
              <div className="left">
                <span>Paciente: </span>
                <span>Data:</span>
                <span>Horário:</span>
                <span>Médico(a):</span>
                <span>Esp:</span>
                <span>Status:</span>
              </div>
              <div className="right" key={index}>
                <span>{item?.patient_name}</span>
                <span>{item?.date.slice(0, 10)}</span>
                <span>{item.date.slice(11, 16)}</span>
                <span>{item?.professional.name}</span>
                <span>{item?.professional.specialty}</span>
                <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
              </div>
            </CardPatient>
          ))}
      </BoxPatient>
    </ContainerPatient>
  );
};
