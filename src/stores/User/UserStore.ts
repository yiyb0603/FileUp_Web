import InitialStore from 'stores/Initial';
import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import { getResponse } from 'lib/Axios';
import { IUserResponse, IUserResponseInfo } from 'util/types/UserTypes';

@autobind
class UserStore extends InitialStore {
  @observable userInfo: IUserResponseInfo | null = null;

  @action
  handleGetUserInfo = async (id: number): Promise<void> => {
    try {
      this.isLoading = true;

      const response: IUserResponse = await getResponse(`/users/${id}`);
      this.userInfo = response.object;
      
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }
  
  @action
  handleClearInfo = (): void => {
    this.userInfo = null;
  }
}

export default new UserStore();