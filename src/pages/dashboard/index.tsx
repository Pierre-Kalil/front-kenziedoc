import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navBar";
import { ContainerMain, ContainerOutlet } from "./style";
import { AllProfessionals } from "../allProfessionals";
import { AllAppointments } from "../allAppointments";
import { useStateContext } from "../../context/States";

export const Dashboard = () => {
  const { allProfessinals, allApointments } = useStateContext();

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {allProfessinals ? <AllProfessionals /> : <></>}
        {allApointments ? <AllAppointments /> : <></>}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
