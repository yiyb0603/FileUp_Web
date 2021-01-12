import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { action, observable } from 'mobx';
import InitialStore from 'stores/Initial';
import { IPostList, IPostView } from 'util/types/PostTypes';

@autobind
class PostStore extends InitialStore {
  @observable count: number = 0;
  @observable postList: IPostView[] = [];
  @observable maxCount: number = 0;

  @action
  public handleGetPosts = async (): Promise<IPostList> => {
    try {
      this.isLoading = true;
      const response: IPostList = await getResponse(`/posts/${this.count}`);

      const { maxPage } = response.object;
      const { posts } = response.object;
      this.maxCount = maxPage;

      if (this.count === 0) {
        this.postList = posts;
      } else if (this.count !== 0) {
        this.postList = this.postList.concat(posts);
      }
      this.isLoading = false;
      
      return response;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  @action
  public handleIncreaseCount = (count: number | null): void => {
    if (count === null) {
      ++this.count;
    } else {
      this.count = count;
    }
  }
};

export default new PostStore();