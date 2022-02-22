import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navBar";
import { ContainerMain, ContainerOutlet } from "./style";
import { AllProfessionals } from "../allProfessionals";
import { AllAppointments } from "../allAppointments";
import { useStateContext } from "../../context/States";
import { useAuth } from "../../context/Auth";
import jwtDecode from "jwt-decode";
import { IDecoded } from "./types";

export const Dashboard = () => {
  const { allProfessionals, allApointments } = useStateContext();
  const { token } = useAuth();
  const decoded: IDecoded = jwtDecode(token);

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {allProfessionals ? <AllProfessionals /> : <></>}
        {allApointments ? <AllAppointments /> : <></>}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
