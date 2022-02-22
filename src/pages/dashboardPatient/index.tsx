import { Outlet } from "react-router-dom";
import { ContainerMain, ContainerOutlet } from "./style";
import { NavBar } from "../../components/navBar";
import { AllProfessionals } from "../allProfessionals";
import { useStateContext } from "../../context/States";

export const DashboardPatient = () => {
  const { apointments } = useStateContext();

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {/* {allProfessional &&
          allProfessional.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))} */}
        {apointments ? <AllProfessionals /> : <></>}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
