export interface IResponse {
  status: number;
  message: string;
}

export interface IPostSuccessRes extends IResponse {
  object: {
    id: number;
  };
};

export interface IError {
  response: {
    data: {
      status: number;
      message: string;
      object: null;
    };
  };
};