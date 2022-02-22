import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { AdminProps, AdminProviderData } from "./types";

const AdminContext = createContext<AdminProviderData>({} as AdminProviderData);

export const AdminProvider = ({ children }: AdminProviderData) => {
  const { token } = useAuth();

  const createAdmin = (adminData: AdminFormProps) => {
    api
      .post("/admin", adminData)
      .then((_) => {
        toast.success("Admin cadastrado com sucesso!");
      })
      .catch((_) => {
        toast.error("Algo saiu errado. Tente novamente.");
      });
  };

  const updateAdmin = (id: string, data: any) => {
    api
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
