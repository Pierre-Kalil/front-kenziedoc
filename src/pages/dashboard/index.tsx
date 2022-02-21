import { Outlet } from "react-router-dom";

import { useAuth } from "../../context/Auth";
import { ContainerMain, ContainerOutlet } from "./style";
import { NavBar } from "../../components/navBar";
import { AllProfessionals } from "../allProfessionals";
import { useStateContext } from "../../context/States";

//isProf
//isAdm
//or fulero

export const Dashboard = () => {
  const { apointments, allProfessinals } = useStateContext();

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {allProfessinals ? <AllProfessionals /> : <></>}
        {/* { ? <AllPatients /> : <></>} */}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
