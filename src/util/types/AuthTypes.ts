import { IResponse } from "./Response";

export interface ILoginTypes extends IResponse {
  object: {
    token: string;
  };
};