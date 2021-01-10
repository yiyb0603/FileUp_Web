import { IResponse } from "./Response";

export interface ILoginTypes extends IResponse {
  object: {
    token: string;
  };
};

export interface ITokenTypes {
  id: number;
  email: string;
}