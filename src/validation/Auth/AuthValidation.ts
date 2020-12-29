import customTrim from "converter/CustomTrim";
import { errorToast } from "lib/Toast";
import { SignInDto, SignUpDto } from "util/types/dto/Auth.dto";

export const emailValidation = (email: string): boolean => {
  const emailRegular: RegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (!emailRegular.test(email) || !customTrim(email)) {
    errorToast('이메일이 올바르지 않습니다.');
    return false;
  }

  return true;
};

export const signInValidation = (request: SignInDto): boolean => {
  const { email, password } = request;

  if (!customTrim(email) || !customTrim(password)) {
    errorToast("값을 모두 입력해주세요.");
    return false;
  }

  if (!emailValidation(email)) {
    return false;
  }

  return true;
}

export const signUpValidation = (request: SignUpDto, rePassword: string): boolean => {
  const { email, certifyCode, password, nickname } = request;
  const passwordRegular: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,25}$/;

  if (!customTrim(email) || !customTrim(certifyCode) || !customTrim(password) || !customTrim(nickname) || !customTrim(rePassword)) {
    errorToast("값을 모두 입력해주세요.");
    return false;
  }

  if (!passwordRegular.test(password)) {
    errorToast("비밀번호 형식이 올바르지 않습니다.");
    return false;
  }

  if (nickname.length > 16) {
    errorToast("닉네임은 16자 이하입니다.");
    return false;
  }

  if (password !== rePassword) {
    errorToast("비밀번호가 서로 맞지 않습니다.");
    return false;
  }

  return true;
}