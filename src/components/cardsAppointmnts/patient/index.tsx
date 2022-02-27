import { CardAppointmentNew } from "../style";
import { IAppointments } from "../types";

export const CardPatient = (props: IAppointments) => {
  const appo = props.patient;
  return (
    <CardAppointmentNew>
      <div className="left">
        <span>Data:</span>
        <span>Horário:</span>
        <span>Paciente:</span>
        <span>Médico(a):</span>
        <span>CRM:</span>
        <span>Status:</span>
      </div>
      <div className="right">
        <span>{appo?.date?.slice(0, 10)}</span>
        <span>{appo?.date?.slice(11, 16)}</span>
        <span>{appo?.patient_name}</span>
        <span>{appo?.professional?.name}</span>
        <span>{appo?.professional?.council_number}</span>
        <span>{appo?.finished ? "Finalizada" : "Ativo"}</span>
      </div>
    </CardAppointmentNew>
  );
};
