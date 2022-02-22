import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { AppointmentsContextProps, AppointmentsProviderProps } from "./types";
import toast from "react-hot-toast";
import { AppointmentsFormProps } from "../../components/formAppointments/types";
import { useAuth } from "../Auth";

const AppointmentContext = createContext<AppointmentsProviderProps>(
  {} as AppointmentsProviderProps
);

export const AppointmentsProvider = ({
  children,
}: AppointmentsContextProps) => {
  const { token, user } = useAuth();
  const [appointments, setAppointments] = useState<AppointmentsFormProps[]>(
    [] as AppointmentsFormProps[]
  );
  console.log(appointments);
  console.log(user);
  const createAppointments = (newdata: AppointmentsFormProps) => {
    api
      .post("/appointments", newdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Consulta marcada com sucesso!");
      })
      .catch((err) => {
        toast.success("Algo saiu errado. Tente novamente.");
      });
  };

  useEffect(() => {
    if (token) {
      api
        .get(`/appointments/patient/${user?.cpf}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAppointments(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <AppointmentContext.Provider value={{ appointments, createAppointments }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentContext);
