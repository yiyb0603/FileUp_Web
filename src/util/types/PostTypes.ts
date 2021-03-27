import { ICategoryTypes } from './CategoryTypes';
import { ICommentType } from './CommentTypes';
import { IFileType } from './FileTypes';
import { IResponse } from './Response';
import { IUserTypes } from './UserTypes';

export interface ParamTypes {
  idx: string | undefined;
  id: string | undefined;
};

export interface ISelectFile {
  id: number;
  file: File;
}

export interface IPostList extends IResponse {
  object: IPostView[];
};

export interface IPostViewRes extends IResponse {
  object: IPostViewResObj;
};

export interface IPostViewResObj {
  id: number;
  category: ICategoryTypes;
  title: string;
  content: string;
  created: string | Date;
  updated: string | Date | null;
  preview: boolean;
  view: number;
  like: number;
  comments: ICommentType[];
  author: IUserTypes;
  files: IFileType[];
}

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