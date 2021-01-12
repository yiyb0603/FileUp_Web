import { autobind } from 'core-decorators';
import { postRequest } from 'lib/Axios';
import { action, observable } from 'mobx';
import InitialStore from 'stores/Initial';
import { ILoginTypes } from 'util/types/AuthTypes';
import { SignInDto, SignUpDto } from 'util/types/dto/Auth.dto';
import { IResponse } from 'util/types/Response';

@autobind
class AuthStore extends InitialStore {
  @observable emailLoading: boolean = false;

  @action
  public handleSignIn = async (request: SignInDto): Promise<ILoginTypes> => {
    try {
      this.isLoading = true;
      const response: ILoginTypes = await postRequest('/users/signIn', request);
      this.isLoading = false;

      return response;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  @action
  public handleSignUp = async (request: SignUpDto): Promise<IResponse> => {
    try {
      this.isLoading = true;
      const response: IResponse = await postRequest('/users/signUp', request);
      this.isLoading = false;

      return response;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  @action
  public handleSendEmail = async (email: string) => {
    try {
      this.emailLoading = true;
      const response: IResponse = await postRequest('/users/sendEmail', { email });
      this.emailLoading = false;

      return response;
    } catch (error) {
      this.emailLoading = false;
      throw error;
    }
  };
};

export default new AuthStore();