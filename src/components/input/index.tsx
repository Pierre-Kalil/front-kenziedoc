import { ContainerInput, InputBox } from "./style";

interface FormProps {
  register: (name: string) => void;
  name: string;
  password?: string;
  error: string;
  placeholder?: string;
  value?: string | number;
  borderInput?: boolean;
  colorInput?: boolean;
  type?: string;
  onChange?: (e: any) => void;
  step?: string;
  defaultValue?: string;
  rows?: string;
  cols?: string;
}

export const Input = ({
  register,
  name,
  error = "",
  value,
  borderInput = false,
  colorInput = false,
  type,
  onChange,
  step,
  defaultValue,
  rows,
  cols,
  ...rest
}: FormProps) => {
  return (
    <ContainerInput>
      <InputBox borderInput={borderInput} colorInput={colorInput}>
        <input
          {...register(name)}
          type={type}
          value={value}
          onChange={onChange}
          step={step}
          defaultValue={defaultValue}
          rows={rows}
          cols={cols}
          {...rest}
        />
      </InputBox>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </ContainerInput>
  );
};
