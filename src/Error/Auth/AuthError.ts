import { errorToast } from "lib/Toast";
import { IError } from "util/types/Response";

export const signUpError = (error: IError) => {
  const { status, message } = error.response.data;

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

export const signInError = (error: IError) => {
  const { status, message } = error.response.data;

  switch (status) {
    case 400:
      errorToast("검증 오류입니다.");
      return;

    case 401:
      errorToast("아이디 또는 비밀번호가 올바르지 않습니다.");
      return;

    case 500:
      errorToast("서버 오류입니다.");
      return;

    default:
      errorToast(message);
      return;
  }
}