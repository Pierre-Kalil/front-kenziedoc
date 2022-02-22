import { createContext, useContext, useState } from "react";
import { ContextStates, ProviderStates } from "./types";

const StatesContext = createContext<ContextStates>({} as ContextStates);

export const StatesProvider = ({ children }: ProviderStates) => {
  const [modalAppointment, setModalAppointment] = useState<boolean>(false);
  const [pageToLoad, setPageToLoad] = useState("home");
  const [home, setHome] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>(
    localStorage.getItem("@kenzieDoc:userBy") || ""
  );

  return (
    <StatesContext.Provider
      value={{
        setModalAppointment,
        modalAppointment,
        setPageToLoad,
        pageToLoad,
        userType,
        setHome,
        home,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStateContext = () => useContext(StatesContext);
