import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validator";
import login from "../../assets/login.svg";
import { Input } from "../input";
import { PrescriptionFormProps } from "./types";
import { ButtonPrescription, ContainerForm } from "./style";
import { useAppointment } from "../../context/Appointments";
import { FaRegWindowClose } from "react-icons/fa";
import { useStateContext } from "../../context/States";

export const FormPrescription = () => {
  const { updateAppointments } = useAppointment();
  const { setModalPrescription } = useStateContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: PrescriptionFormProps) => {
    updateAppointments(data);
    reset();
  };

  const handleSchedule = () => {
    setModalPrescription(false);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="header">
          <FaRegWindowClose />

          <span>Prescrição médica</span>
          <img src={login} alt="" />
        </div>
        <div className="inputs">
          <Input
            colorInput
            type="textarea"
            rows="5"
            cols="10"
            placeholder="Informe sua prescrição ao paciente"
            register={register}
            name="prescription"
            error={errors.prescription?.message}
          />
          <ButtonPrescription type="submit">Enviar</ButtonPrescription>
        </div>
      </form>
    </ContainerForm>
  );
};
