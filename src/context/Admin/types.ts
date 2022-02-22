import { ReactNode } from "react";

export interface AdminProviderData {
  children: ReactNode;
}

export interface AdminProps {
  name: string;
  email: string;
  password: string;
}

export interface AdminProviderProps {
    createAdmin: (admin: AdminFormProps, navigate)
}
