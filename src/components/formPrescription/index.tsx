import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validator";
import login from "../../assets/login.svg";
import { Input } from "../input";
import { PrescriptionFormProps } from "./types";
import { ButtonPrescription, ContainerForm } from "./style";

export const FormPrescription = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: PrescriptionFormProps) => {
    // createPatient(data, navigate);
    reset();
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="header">
          <span>Cadastre-se como paciente</span>
          <img src={login} alt="" />
        </div>
        <div className="inputs">
          <Input
            colorInput
            type="textarea"
            placeholder="Informe sua prescrição ao paciente"
            register={register}
            name="prescription"
            error={errors.prescription?.message}
          />
          <ButtonPrescription type="submit">Login</ButtonPrescription>
        </div>
      </form>
    </ContainerForm>
  );
};
