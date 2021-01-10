import { IError } from "util/types/Response";

class CustomError {
  readonly status: number = 0;
  readonly message: string = '';
  readonly object: null = null;

  constructor(error: IError) {
    const { data } = error.response;

    if (data as CustomError) {
      const { status, message } = error.response.data;

      this.status = status;
      this.message = message;
    } else {
      throw error;
    }
  }
}

export default CustomError;