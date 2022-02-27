import { CardAppointmentNew } from "../style";
import { IAppointments } from "../types";

export const CardTomorrow = (props: IAppointments) => {
  const appo = props.tomorrow;
  return (
    <CardAppointmentNew>
      <div className="left">
        <span>Data:</span>
        <span>Horário:</span>
        <span>Paciente:</span>
        <span>Médico(a):</span>
      </div>
      <div className="right">
        <span>{appo?.date?.slice(0, 10)}</span>
        <span>{appo?.date?.slice(11, 16)}</span>
        <span>{appo?.patient?.name}</span>
        <span>{appo?.professional?.name}</span>
      </div>
    </CardAppointmentNew>
  );
};
