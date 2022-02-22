import { createContext, useContext, useState } from "react";
import { ContextStates, ProviderStates } from "./types";

const StatesContext = createContext<ContextStates>({} as ContextStates);

export const StatesProvider = ({ children }: ProviderStates) => {
  const [modalAppointment, setModalAppointment] = useState<boolean>(false);
  const [allApointments, setAllAppointments] = useState<boolean>(false);
  const [allProfessionals, setAllProfessionals] = useState<boolean>(false);
  const [logout, setLogout] = useState<boolean>(false);
  const [userType, setUserType] = useState(
    JSON.stringify(localStorage.getItem("@kenzieDoc:userBy"))
  );
  console.log(userType);

  return (
    <StatesContext.Provider
      value={{
        setModalAppointment,
        modalAppointment,
        setAllAppointments,
        allApointments,
        setAllProfessionals,
        allProfessionals,
        setLogout,
        logout,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStateContext = () => useContext(StatesContext);
