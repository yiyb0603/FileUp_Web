import InitialStore from "stores/Initial";
import { autobind } from 'core-decorators';
import { action } from 'mobx';
import { getResponse } from "lib/Axios";

@autobind
class UserStore extends InitialStore {
  @action
  handleGetUserInfo = async (id: number) => {
    try {
      const response = await getResponse(`/users/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserStore;