import { ReactNode } from "react";
import { AppointmentsFormProps } from "../../components/formAppointments/types";

export interface AppointmentsContextProps {
  children: ReactNode;
}

export interface AppointmentsProviderProps {
  appointments: AppointmentsFormProps[];
  // setAppointments: React.Dispatch<React.SetStateAction<AppointmentsFormProps[]>>;
  createAppointments: (newdata: AppointmentsFormProps) => void;
}
