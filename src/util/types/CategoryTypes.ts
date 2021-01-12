import { IUserTypes } from "./UserTypes";

export interface ICategoryTypes {
  id: number;
  name: string;
  created: string | Date;
  creator: IUserTypes;
}