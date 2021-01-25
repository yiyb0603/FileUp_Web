import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { action, observable } from 'mobx';
import { ICategoryList, ICategoryTypes } from 'util/types/CategoryTypes';
import InitialStore from '../Initial';

@autobind
class CategoryStore extends InitialStore {
  @observable categoryList: ICategoryTypes[] = [];

  @action
  handleCategoryList = async (): Promise<void> => {
    try {
      const response: ICategoryList = await getResponse('/categories');

      const { object } = response;
      this.categoryList = object;
    } catch (error) {
      throw error;
    }
  };
}

export default new CategoryStore();