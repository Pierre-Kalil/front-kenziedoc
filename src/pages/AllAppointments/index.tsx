import { useAppointment } from "../../context/Appointments";
import { useAuth } from "../../context/Auth";
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
  const { appointmentPatient, appointmentProf, tomorrow, waitList } =
    useAppointment();
  return (
    <>
      {userType.length === 11 ? (
        <ContainerAppointments>
          <BoxAppointments>
            {appointmentPatient.map((item, index) => (
              <CardAppointments key={index}>
                <span>{item.patient_name}</span>
                <span>{item.date}</span>
                <span>{item.professional.name}</span>
                <span>{item.professional.specialty}</span>
                <span>{item.finished}</span>
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
                <button> Minhas consultas</button>
              </Li>
              <Li>
                <button> Lista de espera </button>
              </Li>
            </Ul>
          </HeaderProfAdmin>
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
        </ContainerAppointments>
      ) : (
        <></>
      )}
      {userType ? (
        <ContainerAppointments>
          <HeaderProfAdmin>
            <Ul>
              <Li>
                <button>Consultas paciente</button>
              </Li>
              <Li>
                <button>Consultas médico</button>
              </Li>
              <Li>
                <button>Lista de espera médico</button>
              </Li>
              <Li>
                <button>Consultas de amanhã</button>
              </Li>
            </Ul>
          </HeaderProfAdmin>
          <BoxAppointments>
            {tomorrow.map((item, index) => (
              <CardAppointments key={index}>
                <span>{item.date}</span>
                <span>{item.patient}</span>
                <span>{item.professional}</span>
              </CardAppointments>
            ))}
          </BoxAppointments>
        </ContainerAppointments>
      ) : (
        <></>
      )}
    </>
  );
};
