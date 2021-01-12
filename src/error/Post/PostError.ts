import CustomError from "error/CustomError";
import { errorToast } from "lib/Toast";
import { IError } from "util/types/Response";

class PostError extends CustomError {
  constructor(private _error: IError) {
    super(_error);
  }

  public getPostsError = (): void => {
    const { status, message } = this;

    switch (status) {
      default: 
        errorToast(message);
    };
  };
}

export default PostError;