import { IResponse } from "./Response";
import { IUserTypes } from "./UserTypes";

export interface ICategoryTypes {
  id: number;
  name: string;
  created: string | Date;
  creator: IUserTypes;
};

export interface ICategoryList extends IResponse {
  object: ICategoryTypes[];
};