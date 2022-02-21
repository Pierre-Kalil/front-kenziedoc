import { Dispatch, ReactNode } from "react";

export interface ProviderStates {
  children: ReactNode;
}

export interface ContextStates {
  setModalAppointment: Dispatch<React.SetStateAction<boolean>>;
  modalAppointment: boolean;
  setAllAppointments: Dispatch<React.SetStateAction<boolean>>;
  allApointments: boolean;
  setAllProfessinals: Dispatch<React.SetStateAction<boolean>>;
  allProfessinals: boolean;
}
