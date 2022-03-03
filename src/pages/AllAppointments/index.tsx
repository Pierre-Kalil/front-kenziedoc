import { useEffect, useState } from "react";
import { useAppointment } from "../../context/Appointments";
import { useAuth } from "../../context/Auth";
import { useStateContext } from "../../context/States";
import { CardProf } from "../../components/cardsAppointmnts/prof";
import { CardWait } from "../../components/cardsAppointmnts/wait";
import { CardPatient } from "../../components/cardsAppointmnts/patient";
import { CardTomorrow } from "../../components/cardsAppointmnts/tomorrow";
import { HeaderAdminProf } from "../../components/headerAdminProf";
import { BoxAppointments, ContainerAppointments, BoxSearch } from "./style";
import { FormPrescription } from "../../components/formPrescription";

export const AllAppointments = () => {
  const { user } = useAuth();
  const {
    filterPatient,
    filterProfessional,
    filterTomorrow,
    filterWaitList,
    appointmentPatient,
    appointmentProf,
    tomorrow,
    waitList,
  } = useAppointment();
  const { appointmentsToLoad, profAppointment, modalPrescription } =
    useStateContext();
  const [councilNumber, setCouncilNumber] = useState("");

  const [cpf, setCpf] = useState("");

  const appointments: {
    [key: string]: string;
  } = {
    professionals: "prof",
    patients: "patients",
    tomorrow: "tomorrow",
    wait: "wait",
  };

  useEffect(() => {
    filterTomorrow();
    filterPatient(cpf);
    filterWaitList(councilNumber);
    filterProfessional(councilNumber);
  }, []);

  const handleSearch = () => {
    filterPatient(cpf);
    filterWaitList(councilNumber);
    filterProfessional(councilNumber);
  };
  return (
    <>
      {!user.isAdm && !user.isProf ? (
        <ContainerAppointments>
          <h1>Minhas Consultas</h1>
          <BoxAppointments>
            {appointmentPatient &&
              appointmentPatient.map((item, index) => (
                <CardPatient key={index} patient={item} />
              ))}
          </BoxAppointments>
        </ContainerAppointments>
      ) : (
        <></>
      )}

      {user.isProf ? (
        <ContainerAppointments>
          <HeaderAdminProf />
          {profAppointment ? (
            <BoxAppointments>
              {waitList.length > 0 ? (
                waitList.map((item, index) => (
                  <CardWait key={index} wait={item} />
                ))
              ) : (
                <></>
              )}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {modalPrescription ? <FormPrescription /> : <></>}
              {appointmentProf &&
                appointmentProf.map((item, index) => (
                  <CardProf key={index} prof={item} />
                ))}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
      {user.isAdm ? (
        <ContainerAppointments>
          <HeaderAdminProf />
          {appointments[appointmentsToLoad] === "patients" ? (
            <BoxSearch>
              <input
                type="text"
                placeholder="CPF do paciente"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <button onClick={handleSearch}>Pesquisar</button>
            </BoxSearch>
          ) : appointments[appointmentsToLoad] === "prof" ||
            appointments[appointmentsToLoad] === "wait" ? (
            <BoxSearch>
              <input
                type="text"
                placeholder="CRM do Médico"
                value={councilNumber}
                onChange={(e) => setCouncilNumber(e.target.value)}
              />
              <button onClick={handleSearch}>Pesquisar</button>
            </BoxSearch>
          ) : (
            <></>
          )}
          {appointments[appointmentsToLoad] === "wait" ? (
            <BoxAppointments>
              {waitList.length > 0
                ? waitList.map((item, index) => (
                    <CardWait key={index} wait={item} />
                  ))
                : ""}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "prof" ? (
            <BoxAppointments>
              {appointmentProf &&
                appointmentProf.map((item, index) => (
                  <CardProf key={index} prof={item} />
                ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "patients" ? (
            <BoxAppointments>
              {appointmentPatient &&
                appointmentPatient.map((item, index) => (
                  <CardPatient key={index} patient={item} />
                ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {tomorrow &&
                tomorrow.map((tomo, index) => {
                  return <CardTomorrow key={index} tomorrow={tomo} />;
                })}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
    </>
  );
};
