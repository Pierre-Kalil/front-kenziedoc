import { FaBookMedical, FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { ContainerNavBar } from "./style";
import { useStateContext } from "../../context/States";
import { useAuth } from "../../context/Auth";

export const NavBar = () => {
  const { setPageToLoad } = useStateContext();
  const { userType } = useAuth();

  return (
    <ContainerNavBar>
      <div className="boxnav">
        <h1>{userType}</h1>
        <nav className="nav">
          <ul>
            <li>
              <button onClick={() => setPageToLoad("home")}>
                <FaHome />
                <span className="title">Home</span>
              </button>
            </li>
            {userType.length === 11 || userType ? (
              <li>
                <button onClick={() => setPageToLoad("professionals")}>
                  <FaBookMedical />
                  <span className="title">Médicos</span>
                </button>
              </li>
            ) : (
              <></>
            )}
            {userType ? (
              <li>
                <button onClick={() => setPageToLoad("patients")}>
                  <BsPeopleFill />
                  <span className="title">Pacientes</span>
                </button>
              </li>
            ) : (
              <></>
            )}
            {userType ? (
              <li>
                <button onClick={() => setPageToLoad("appointments")}>
                  <FaRegCalendarAlt />
                  <span className="title">Consultas</span>
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => setPageToLoad("appointments")}>
                  <FaRegCalendarAlt />
                  <span className="title">Minhas Consultas</span>
                </button>
              </li>
            )}
            <li>
              <button onClick={() => setPageToLoad("logout")}>
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
