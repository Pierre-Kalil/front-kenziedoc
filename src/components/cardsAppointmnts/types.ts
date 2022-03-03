import { Dispatch } from "react";

export interface IAppointments {
  patient?: {
    id?: string;
    date?: string;
    finished?: string;
    patient_name?: string;
    professional?: {
      name?: string;
      specialty?: string;
      email?: string;
      council_number?: string;
    };
  };
  prof?: {
    id?: string;
    date?: string;
    finished?: string;
    professional_name?: string;
    patient?: {
      name?: string;
      age?: number;
      sex?: string;
      healt_plan?: string;
    };
  };
  tomorrow?: {
    professional?: {
      name?: string;
      council_number?: string;
      phone?: string;
    };
    patient?: {
      name?: string;
      cpf?: string;
      phone?: string;
    };
    date?: string;
  };
  wait?: {
    message: string;
    size: number;
    professional_email: string;
    appointments: [
      id: string,
      date: string,
      patient: { name: string; phone: string; email: string }
    ];
  };
  modal?: boolean;
  setModal?: (value: React.SetStateAction<boolean>) => void | undefined;
}
