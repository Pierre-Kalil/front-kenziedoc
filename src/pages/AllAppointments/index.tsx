import { useEffect, useState } from "react";
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
  BoxSearch,
} from "./style";

export const AllAppointments = () => {
  const { user } = useAuth();
  const { filterPatient, filterProfessional, filterTomorrow, filterWaitList } =
    useAppointment();
  const {
    appointmentsToLoad,
    setAppointmentsToLoad,
    profAppointment,
    setProfAppointment,
  } = useStateContext();
  const { appointmentPatient, appointmentProf, tomorrow, waitList } =
    useAppointment();
  const [cpf, setCpf] = useState("");
  const [councilNumber, setCouncilNumber] = useState("");

  const appointments: {
    [key: string]: string;
  } = {
    professionals: "prof",
    patients: "patients",
    tomorrow: "tomorrow",
    wait: "wait",
  };

  useEffect(() => {
    filterPatient(cpf);
    filterProfessional(councilNumber);
    filterTomorrow();
    filterWaitList();
  }, []);
  const handleSearch = () => {
    filterPatient(cpf);
  };
  return (
    <>
      {!user.isAdm && !user.isProf ? (
        <ContainerAppointments>
          <BoxAppointments>
            {appointmentPatient &&
              appointmentPatient.map((item, index) => (
                <CardAppointments>
                  <div className="left">
                    <span>Paciente: </span>
                    <span>Data:</span>
                    <span>Horário:</span>
                    <span>Doutor(a):</span>
                    <span>Esp:</span>
                    <span>Status:</span>
                  </div>
                  <div className="right" key={index}>
                    <span>{item?.patient_name}</span>
                    <span>{item?.date.slice(0, 10)}</span>
                    <span>{item.date.slice(11, 16)}</span>
                    <span>{item?.professional.name}</span>
                    <span>{item?.professional.specialty}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                </CardAppointments>
              ))}
          </BoxAppointments>
        </ContainerAppointments>
      ) : (
        <></>
      )}

      {user.isProf ? (
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
                <CardAppointments>
                  <span>CRM:</span>
                  <div className="left">
                    <span>Espera:</span>
                    <span>Consulta:</span>
                    <span>Mensagem:</span>
                  </div>
                  <div className="right" key={index}>
                    <span>{item.size}</span>
                    <span>{item.appointments}</span>
                    <span>{item.message}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {appointmentProf.map((item, index) => (
                <CardAppointments>
                  <div className="left">
                    <span>Data:</span>
                    <span>Nome: </span>
                    <span>Idade:</span>
                    <span>Sexo:</span>
                    <span>Plano:</span>
                    <span>Status</span>
                  </div>
                  <div className="right" key={index}>
                    <span>{item.date}</span>
                    <span>{item.patient.name}</span>
                    <span>{item.patient.age}</span>
                    <span>{item.patient.sex}</span>
                    <span>{item.patient.healt_plan}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                  {/* <button>Finalizar</button> */}
                </CardAppointments>
              ))}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
      {user.isAdm ? (
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
          ) : appointments[appointmentsToLoad] === "prof" ? (
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
              {waitList.map((item, index) => (
                <CardAppointments>
                  <div className="left">
                    <span>Espera:</span>
                    <span>Consulta:</span>
                    <span>Mensagem:</span>
                  </div>
                  <div className="right" key={index}>
                    <span>{item.size}</span>
                    <span>{item.appointments}</span>
                    <span>{item.message}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "prof" ? (
            <BoxAppointments>
              {appointmentProf.map((item, index) => (
                <CardAppointments>
                  <div className="left">
                    <span>Data:</span>
                    <span>Paciente:</span>
                    <span>Doutor(a):</span>
                    <span>Status:</span>
                  </div>
                  <div className="right" key={index}>
                    <span>{item.date}</span>
                    <span>{item.patient.name}</span>
                    <span>{item.professional_name}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "patients" ? (
            <BoxAppointments>
              {appointmentPatient.map((item, index) => (
                <CardAppointments>
                  <div className="left">
                    <span>Data:</span>
                    <span>Paciente:</span>
                    <span>Doutor(a):</span>
                    <span>CRM:</span>
                    <span>Status:</span>
                  </div>
                  <div className="right" key={index}>
                    <span>{item.date}</span>
                    <span>{item.patient_name}</span>
                    <span>{item.professional.name}</span>
                    <span>{item.professional.council_number}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {tomorrow &&
                tomorrow.map((item, index) => (
                  <CardAppointments>
                    <div className="left">
                      <span>Data:</span>
                      <span>Horário:</span>
                      <span>Paciente:</span>
                      <span>Doutor(a):</span>
                    </div>
                    <div className="right" key={index}>
                      <span>{item.date.slice(0, 10)}</span>
                      <span>{item.date.slice(11, 16)}</span>
                      <span>{item.patient.name}</span>
                      <span>{item.professional.name}</span>
                    </div>
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
