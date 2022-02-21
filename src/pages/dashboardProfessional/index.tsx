import { FormAppointments } from "../../components/formAppointments";
import { useAppointment } from "../../context/Appointments";
import { useAuth } from "../../context/Auth";

export const DashboardProfessional = () => {
  const { user, identifyUser } = useAuth();
  const { appointments } = useAppointment();
  console.log(appointments);
  return (
    <>
      <h1>Medico {identifyUser}</h1>
      <FormAppointments />
      <div>
        {appointments &&
          appointments.map((item) => {
            <li>
              {item.patient}
              {item.newdate}
            </li>;
          })}
      </div>
    </>
  );
};
