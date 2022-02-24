import { userInfo } from "os"
import { useAuth } from "../../context/Auth";
import { FormProfessional } from "../formProfessionl";

export const ToUpdate = () => {
  const { user } = useAuth();

    {user.isProf ? (<FormUpdateProfessional />) : () : ()}
}