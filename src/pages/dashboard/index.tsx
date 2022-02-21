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
  const { allProfessinals, allApointments } = useStateContext();

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {/* Patients */}
        {allProfessinals ? <AllProfessionals /> : <></>}
        {/* {allApointments ? <AllAppointments /> : <></> } */}

        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
