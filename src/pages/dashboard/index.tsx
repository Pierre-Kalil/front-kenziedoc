import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navBar";
import { ContainerMain, ContainerOutlet } from "./style";
import { AllProfessionals } from "../allProfessionals";
import { AllAppointments } from "../allAppointments";
import { useStateContext } from "../../context/States";
import { AllPatients } from "../allPatients";

export const Dashboard = () => {
  const { allProfessinals, allApointments, allPatients } = useStateContext();

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {allProfessinals ? <AllProfessionals /> : <></>}
        {allApointments ? <AllAppointments /> : <></>}
        {allPatients ? <AllPatients /> : <></>}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
