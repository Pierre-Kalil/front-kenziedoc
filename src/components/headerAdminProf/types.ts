import { Dispatch } from "react";

export interface IHeader {
  header?: {
    MenuDrop: boolean;
    setMenuDrop: Dispatch<React.SetStateAction<boolean>>;
  };
}
