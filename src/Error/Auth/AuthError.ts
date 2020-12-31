import { errorToast } from "lib/Toast";
import { IError, IResponse } from "util/types/Response";

class AuthError {
  error: IResponse = {
    status: 0,
    message: '',
  };

  constructor(error: IError) {
    const { status, message } = error.response.data;
    this.error.status = status;
    this.error.message = message;
  };

  public sendEmailError = (): void => {
    const { status, message } = this.error;

    switch (status) {
      case 409:
        errorToast("이미 존재하는 이메일입니다.");
        return;

      default:
        errorToast(message);
        return;
    };
  }

  public signUpError = (): void => {
    const { status, message } = this.error;

    switch (status) {
      case 400:
        errorToast("검증 오류입니다.");
        return;

      case 401:
        errorToast("인증번호가 올바르지 않습니다.");
        return;

      case 500:
        errorToast("서버 오류입니다.");
        return;

      default:
        errorToast(message);
        return;
    }
  }

  public signInError = (): void => {
    const { status, message } = this.error;

    switch (status) {
      case 400:
        errorToast("검증 오류입니다.");
        return;

      case 401:
        errorToast("아이디 또는 비밀번호가 올바르지 않습니다.");
        return;

      case 409:
        errorToast("존재하지 않는 유저입니다.");
        return;

      case 500:
        errorToast("서버 오류입니다.");
        return;

      default:
        errorToast(message);
        return;
    }
  }
}

export default AuthError;