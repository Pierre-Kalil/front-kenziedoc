import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/Admin";
import { Input } from "../input";
import { Button, ContainerForm } from "./styles";
import { AdminFormProps } from "./types";
import { schema } from "./validators";

export const FormAdmin = () => {
  const navigate = useNavigate();
  const { createAdmin } = useAdmin();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitData = (data: AdminFormProps) => {
    createAdmin(data, navigate);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="inputs">
          <Input
            colorInput
            name="name"
            placeholder="Nome completo"
            type="text"
            register={register}
            error={errors.name?.message}
          />
          <Input
            colorInput
            name="email"
            placeholder="Email válido"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            colorInput
            name="password"
            placeholder="Senha"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            colorInput
            name="confirmPassword"
            placeholder="Confirmar senha"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit">Cadastrar!</Button>
        </div>
      </form>
    </ContainerForm>
  );
};
