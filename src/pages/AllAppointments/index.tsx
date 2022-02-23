import { useAppointment } from "../../context/Appointments";
import { useAuth } from "../../context/Auth";
import { useStateContext } from "../../context/States";
import {
  BoxAppointments,
  CardAppointments,
  ContainerAppointments,
  HeaderProfAdmin,
  Ul,
  Li,
} from "./style";

export const AllAppointments = () => {
  const { userType } = useAuth();
  const {
    appointmentsToLoad,
    setAppointmentsToLoad,
    profAppointment,
    setProfAppointment,
  } = useStateContext();
  const { appointmentPatient, appointmentProf, tomorrow, waitList } =
    useAppointment();

  const appointments: {
    [key: string]: string;
  } = {
    professionals: "prof",
    patients: "patients",
    tomorrow: "tomorrow",
    wait: "wait",
  };

  return (
    <>
      {userType.length === 11 ? (
        <ContainerAppointments>
          <BoxAppointments>
            {appointmentPatient &&
              appointmentPatient.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item?.patient_name}</span>
                  <span>{item?.date}</span>
                  <span>{item?.professional.name}</span>
                  <span>{item?.professional.specialty}</span>
                  <span>{item?.finished}</span>
                </CardAppointments>
              ))}
          </BoxAppointments>
        </ContainerAppointments>
      ) : (
        <></>
      )}
      {userType.length > 5 ? (
        <ContainerAppointments>
          <HeaderProfAdmin>
            <Ul>
              <Li>
                <button onClick={() => setProfAppointment(true)}>
                  Minhas consultas
                </button>
              </Li>
              <Li>
                <button onClick={() => setProfAppointment(false)}>
                  Lista de espera
                </button>
              </Li>
            </Ul>
          </HeaderProfAdmin>
          {profAppointment ? (
            <BoxAppointments>
              {waitList.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item.size}</span>
                  <span>{item.appointments}</span>
                  <span>{item.message}</span>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {appointmentProf.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item.date}</span>
                  <span>{item.patient.name}</span>
                  <span>{item.patient.age}</span>
                  <span>{item.patient.sex}</span>
                  <span>{item.patient.healt_plan}</span>
                  <span>{item.finished}</span>
                  <button>Finalizar</button>
                </CardAppointments>
              ))}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
      {userType ? (
        <ContainerAppointments>
          <HeaderProfAdmin>
            <Ul>
              <Li>
                <button onClick={() => setAppointmentsToLoad("patients")}>
                  Consultas paciente
                </button>
              </Li>
              <Li>
                <button onClick={() => setAppointmentsToLoad("professionals")}>
                  Consultas médico
                </button>
              </Li>
              <Li>
                <button onClick={() => setAppointmentsToLoad("wait")}>
                  Lista de espera médico
                </button>
              </Li>
              <Li>
                <button onClick={() => setAppointmentsToLoad("tomorrow")}>
                  Consultas de amanhã
                </button>
              </Li>
            </Ul>
          </HeaderProfAdmin>
          {appointments[appointmentsToLoad] === "wait" ? (
            <BoxAppointments>
              {waitList.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item.appointments}</span>
                  <span>{item.message}</span>
                  <span>{item.size}</span>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "prof" ? (
            <BoxAppointments>
              {appointmentProf.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item.date}</span>
                  <span>{item.patient}</span>
                  <span>{item.professional_name}</span>
                  <span>{item.finished}</span>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "patients" ? (
            <BoxAppointments>
              {appointmentPatient.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item.date}</span>
                  <span>{item.patient_name}</span>
                  <span>{item.professional.name}</span>
                  <span>{item.professional.council_number}</span>
                  <span>{item.finished}</span>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {tomorrow.map((item, index) => (
                <CardAppointments key={index}>
                  <span>{item.date}</span>
                  <span>{item.patient}</span>
                  <span>{item.professional}</span>
                </CardAppointments>
              ))}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
    </>
  );
};
