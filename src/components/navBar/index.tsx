import { useState } from "react";
import { FaBookMedical, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { useAuth } from "../../context/Auth";
import { ContainerNavBar } from "./style";
import { useStateContext } from "../../context/States";
import { useProfessional } from "../../context/Professional";
import { useAppointment } from "../../context/Appointments";

//isProf
//isAdm
//or fulero

export const NavBar = () => {
  const { user } = useAuth();
  const { setAllProfessinals, setAllAppointments } = useStateContext();

  const handleAppointment = () => {
    setAllProfessinals(false);
    setAllAppointments(true);
  };

  const handleProfessional = () => {
    setAllAppointments(false);
    setAllProfessinals(true);
  };

  return (
    <ContainerNavBar>
      <div className="boxnav">
        <h1>{user && user.name}</h1>
        <nav className="nav">
          <ul>
            <li>
              <button>
                <FaHome />
                <span className="title">Home</span>
              </button>
            </li>
            <li>
              <button onClick={handleProfessional}>
                <FaBookMedical />
                <span className="title">Médicos</span>
              </button>
            </li>
            <li>
              <button onClick={handleAppointment}>
                <FaRegCalendarAlt />
                <span className="title">Minhas Consultas</span>
              </button>
            </li>
            <li>
              <button>
                <BiExit />
                <span className="title">Sair</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </ContainerNavBar>
  );
};
