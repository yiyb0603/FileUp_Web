export interface IResponse {
  status: number;
  message: string;
}

export interface IError {
  response: {
    data: {
      status: number;
      message: string;
    };
  };
};