export interface SignInDto {
  email: string;
  password: string;
};

export interface SignUpDto extends SignInDto {
  nickname: string;
  certifyCode: string;
}