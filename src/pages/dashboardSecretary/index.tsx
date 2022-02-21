import { useAuth } from "../../context/Auth";
import { usePatient } from "../../context/Patient";

export const DashboardSecretary = () => {
  const { identifyUser, user } = useAuth();
  const { allPatient } = usePatient();
  console.log(identifyUser);
  return (
    <>
      <h1>Admin {identifyUser}</h1>
    </>
  );
};
