import { CardAppointmentNew } from "../style";
import { IAppointments } from "../types";

export const CardWait = (props: IAppointments) => {
  const appo = props.wait;
  return (
    <CardAppointmentNew>
      <div className="left">
        <span>Mensagem:</span>
        <span>Email:</span>
      </div>
      <div className="right">
        <span>{appo?.message}</span>
        <span>{appo?.professional_email}</span>
      </div>
    </CardAppointmentNew>
  );
};
