import React, { Dispatch, ReactNode } from "react";

export interface ProviderStates {
  children: ReactNode;
}

export interface ContextStates {
  setModalAppointment: Dispatch<React.SetStateAction<boolean>>;
  modalAppointment: boolean;
  setPageToLoad: Dispatch<React.SetStateAction<string>>;
  pageToLoad: string;
  userType: string;
}
