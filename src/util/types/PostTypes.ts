import { ICategoryTypes } from './CategoryTypes';
import { IResponse } from './Response';
import { IUserTypes } from './UserTypes';

export interface IPostList extends IResponse {
  object: {
    maxPage: number;
    posts: IPostView[];
  }
};

export interface IPostView extends IResponse {
  id: number;
  title: string;
  category: ICategoryTypes;
  author: IUserTypes;
  content: string;
  view: number;
  like: number;
  comments: number;
  files: number;
  created: Date | string;
  updated: Date | string | null;
};