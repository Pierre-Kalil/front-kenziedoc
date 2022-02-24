import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { AdminFormProps } from "../../components/formAdmin/types";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { AdminProps, AdminProviderData, AdminProviderProps } from "./types";

const AdminContext = createContext<AdminProviderData>({} as AdminProviderData);

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const { token } = useAuth();

  const createAdmin = async (adminData: AdminFormProps) => {
    await api
      .post("/admin", adminData)
      .then((_) => {
        toast.success("Admin cadastrado com sucesso!");
      })
      .catch((_) => {
        toast.error("Algo saiu errado. Tente novamente.");
      });
  };

  const updateAdmin = async (id: string, data: any) => {
    await api
      .post(`/admin/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Admin cadastrado com sucesso!");
      })
      .catch((_) => {
        toast.error("Algo saiu errado. Tente novamente.");
      });
  };

  return (
    <AdminContext.Provider value={{ createAdmin, updateAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
