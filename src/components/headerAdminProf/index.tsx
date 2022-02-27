import { useState } from "react";
import { useStateContext } from "../../context/States";
import { HeaderProfAdmin, Li, Menuhamburguer, Ul } from "./style";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { IHeader } from "./types";
import { useAuth } from "../../context/Auth";

export const HeaderAdminProf = (props: IHeader) => {
  const Header = props;
  const { setAppointmentsToLoad, setProfAppointment } = useStateContext();
  const { user } = useAuth();
  const [MenuDrop, setMenuDrop] = useState(false);

  const handleOptions = (appointment: string, bool: boolean) => {
    setAppointmentsToLoad(appointment);
    setMenuDrop(bool);
  };

  const handleMobile = () => {
    if (MenuDrop) {
      return setMenuDrop(false);
    }
    return setMenuDrop(true);
  };

  return (
    <>
      {MenuDrop ? (
        <FiX className="close" onClick={handleMobile} />
      ) : (
        <FiAlignJustify onClick={handleMobile} />
      )}
      {MenuDrop ? (
        <Menuhamburguer className={MenuDrop ? "active" : "menu"}>
          <ul>
            {user.isAdm ? (
              <>
                <li>
                  <button onClick={() => handleOptions("tomorrow", false)}>
                    Consultas de amanha
                  </button>
                </li>
                <li>
                  <button onClick={() => handleOptions("patients", false)}>
                    Consultas pacientes
                  </button>
                </li>
              </>
            ) : (
              <></>
            )}
            <li>
              <button onClick={() => handleOptions("professionals", false)}>
                {user.isAdm ? "Consultas médico" : "Minhas consultas"}
              </button>
            </li>
            <li>
              <button onClick={() => handleOptions("wait", false)}>
                lista de espera
              </button>
            </li>
          </ul>
        </Menuhamburguer>
      ) : (
        <></>
      )}
      <HeaderProfAdmin>
        <Ul>
          {user.isAdm ? (
            <>
              <Li>
                <button onClick={() => handleOptions("tomorrow", false)}>
                  Consulta de amanha
                </button>
              </Li>
              <Li>
                <button onClick={() => handleOptions("patients", false)}>
                  Consultas pacientes
                </button>
              </Li>
            </>
          ) : (
            <></>
          )}
          <Li>
            <button onClick={() => handleOptions("professionals", false)}>
              {user.isAdm ? "Consultas médico" : "Minhas consultas"}
            </button>
          </Li>
          <Li>
            <button onClick={() => handleOptions("wait", false)}>
              Lista de espera
            </button>
          </Li>
        </Ul>
      </HeaderProfAdmin>
    </>
  );
};
