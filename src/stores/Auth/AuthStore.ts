import { autobind } from 'core-decorators';
import { postRequest } from 'lib/Axios';
import { action, observable } from 'mobx';
import { SignInDto, SignUpDto } from 'util/types/dto/Auth.dto';
import { IResponse } from 'util/types/Response';

@autobind
class AuthStore {
  @observable authLoading: boolean = false;
  @observable emailLoading: boolean = false;

  @action
  handleSignIn = async (request: SignInDto) => {
    this.authLoading = true;
    const response: IResponse = await postRequest('/users/signIn', request);
    this.authLoading = false;

    return response;
  }

  @action
  handleSignUp = async (request: SignUpDto) => {
    this.authLoading = true;
    const response: IResponse = await postRequest('/users/signUp', request);
    this.authLoading = false;

    return response;
  }

  @action
  handleSendEmail = async (email: string) => {
    this.emailLoading = true;
    const response: IResponse = await postRequest('/users/sendEmail', { email });
    this.emailLoading = false;

    return response;
  };
};

export default new AuthStore();