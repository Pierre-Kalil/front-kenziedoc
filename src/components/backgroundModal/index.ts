import { Background } from "./styles";
import { BackgroundProviderProps } from "./types";

const BackgroundModal = ({ modal, children }: BackgroundProviderProps) => {
  return <Background modal={modal}>{children}</Background>;
};

export default BackgroundModal;
