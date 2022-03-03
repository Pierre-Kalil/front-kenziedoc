import { useStateContext } from "../../../context/States";
import { CardAppointmentNew } from "../style";
import { IAppointments } from "../types";

export const CardProf = (props: IAppointments) => {
  const appo = props.prof;
  const { modalPrescription, setModalPrescription } = useStateContext();

  const handleFinishAndModal = () => {
    if (modalPrescription) {
      setModalPrescription(false);
    }
    setModalPrescription(true);
  };
  return (
    <CardAppointmentNew>
      <div className="left">
        <span>Data:</span>
        <span>Horário:</span>
        <span>Paciente:</span>
        <span>Médico(a):</span>
        <span>Status:</span>
      </div>
      <div className="right">
        <span>{appo?.date?.slice(0, 10)}</span>
        <span>{appo?.date?.slice(11, 16)}</span>
        <span>{appo?.patient?.name}</span>
        <span>{appo?.professional_name}</span>
        <span>{appo?.finished ? "Finalizada" : "Ativo"}</span>
      </div>
      <button onClick={handleFinishAndModal}>Finalizar</button>
    </CardAppointmentNew>
  );
};
