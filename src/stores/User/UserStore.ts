import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import InitialStore from 'stores/Initial';
import { getResponse } from 'lib/Axios';
import { IUserResponse, IUserResponseInfo } from 'util/types/UserTypes';
import { IPostView } from 'util/types/PostTypes';

@autobind
class UserStore extends InitialStore {
  @observable userInfo: IUserResponseInfo | null = null;
  @observable userPostList: IPostView[] = [];

  @action
  handleGetUserInfo = async (id: number): Promise<void> => {
    try {
      this.isLoading = true;

      const response: IUserResponse = await getResponse(`/users/${id}`);
      const { postList } = response.object;

      this.userInfo = response.object;
      this.userPostList = postList;

      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }
  
  @action
  handleClearInfo = (): void => {
    this.userInfo = null;
    this.userPostList = [];
  }
}

export default new UserStore();