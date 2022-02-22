import { Dispatch, ReactNode } from "react";

export interface ProviderStates {
  children: ReactNode;
}

export interface ContextStates {
  setModalAppointment: Dispatch<React.SetStateAction<boolean>>;
  modalAppointment: boolean;
  setAllAppointments: Dispatch<React.SetStateAction<boolean>>;
  allApointments: boolean;
  setAllProfessionals: Dispatch<React.SetStateAction<boolean>>;
  allProfessionals: boolean;
  setLogout: Dispatch<React.SetStateAction<boolean>>;
  logout: boolean;
}
