import { FaBookMedical, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { useAuth } from "../../context/Auth";
import { ContainerNavBar } from "./style";
import { useStateContext } from "../../context/States";

export const NavBar = () => {
  const { user } = useAuth();
  const { setAllProfessinals, setAllAppointments, userType } =
    useStateContext();

  const handleAppointment = () => {
    setAllProfessinals(false);
    setAllAppointments(true);
  };

  const handleProfessional = () => {
    setAllAppointments(false);
    setAllProfessinals(true);
  };

  const handleLogout = () => {
    localStorage.clear();
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
                <button>
                  <BsPeopleFill />
                  <span className="title">Pacientes</span>
                </button>
              </li>
            ) : (
              <></>
            )}
            {userType ? (
              <li>
                <button>
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
