import { IPostView } from "./PostTypes";
import { IResponse } from "./Response";

export interface IUserTypes {
  code: number;
  email: string;
  id: number;
  nickname: string;
  popularity: number;
  rank: string;
}

export interface IUserResponse extends IResponse {
  object: IUserResponseInfo;
};

export interface IUserResponseInfo {
  id: number;
  nickname: string;
  rank: string;
  email: string;
  code: number;
  showEmail: boolean;
  postList: IPostView[];
  created: string | Date;
  point: number;
  followingList: Array<any>;
  followedList: Array<any>;
}