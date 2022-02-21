import { useState } from "react";
import { FaBookMedical, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { useAuth } from "../../context/Auth";
import { ContainerNavBar } from "./style";
import { useStateContext } from "../../context/States";
import { useProfessional } from "../../context/Professional";

export const NavBar = () => {
  const { user, identifyUser } = useAuth();
  const { setAppointments } = useStateContext();

  const handleAppointment = () => {
    setAppointments(true);
  };

  const handleProfessional = () => {
    setAppointments(true);
  };

  return (
    <ContainerNavBar>
      <div className="boxnav">
        <h1>{user && user.map((item) => item.name)}</h1>
        <nav className="nav">
          <ul>
            <li>
              <button>
                <FaHome />
                <span className="title">Home</span>
              </button>
            </li>
            <li>
              <button>
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
