import { FaBookMedical, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { ContainerNavBar } from "./style";
import { useStateContext } from "../../context/States";
import { useEffect } from "react";

export const NavBar = () => {
  const {
    setAllProfessinals,
    setAllAppointments,
    setAllPatients,
    setHome,
    userType,
  } = useStateContext();

  const handleAppointment = () => {
    setHome(false);
    setAllProfessinals(false);
    setAllPatients(false);
    setAllAppointments(true);
  };

  const handleProfessional = () => {
    setHome(false);
    setAllAppointments(false);
    setAllPatients(false);
    setAllProfessinals(true);
  };

  const handlePatients = () => {
    setHome(false);
    setAllAppointments(false);
    setAllProfessinals(false);
    setAllPatients(true);
  };

  const handleHome = () => {
    setAllProfessinals(false);
    setAllPatients(false);
    setAllAppointments(false);
    setHome(true);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    userType;
  }, [userType]);

  return (
    <ContainerNavBar>
      <div className="boxnav">
        <h1>{userType}</h1>
        <nav className="nav">
          <ul>
            <li>
              <button onClick={handleHome}>
                <FaHome />
                <span className="title">Home</span>
              </button>
            </li>
            {userType.length === 11 || userType ? (
              <li>
                <button onClick={handleProfessional}>
                  <FaBookMedical />
                  <span className="title">Médicos</span>
                </button>
              </li>
            ) : (
              <></>
            )}
            {userType ? (
              <li>
                <button onClick={handlePatients}>
                  <BsPeopleFill />
                  <span className="title">Pacientes</span>
                </button>
              </li>
            ) : (
              <></>
            )}
            {userType ? (
              <li>
                <button onClick={handleAppointment}>
                  <FaRegCalendarAlt />
                  <span className="title">Consultas</span>
                </button>
              </li>
            ) : (
              <li>
                <button onClick={handleAppointment}>
                  <FaRegCalendarAlt />
                  <span className="title">Minhas Consultas</span>
                </button>
              </li>
            )}
            <li>
              <button onClick={handleLogout}>
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
