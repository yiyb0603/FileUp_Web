import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { action, observable } from 'mobx';
import InitialStore from 'stores/Initial';
import { getToken } from 'util/Token';
import { IPostList, IPostView, IPostViewRes, IPostViewResObj } from 'util/types/PostTypes';

@autobind
class PostStore extends InitialStore {
  @observable count: number = 0;
  @observable maxCount: number = 0;
  @observable postList: IPostView[] = [];
  @observable postInfo: IPostViewResObj | null = null;

  @action
  public handleGetPosts = async (): Promise<IPostList> => {
    try {
      this.postList = [];
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
  public handleGetPost = async (idx: number) => {
    try {
      this.isLoading = true;
      const response: IPostViewRes = await getResponse(`/posts/data/${idx}`, getToken());
      const { object } = response;

      this.postInfo = object;
      this.isLoading = false;

      return response;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  @action
  public handleClearInfo = (): void => {
    this.postInfo = null;
  };

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