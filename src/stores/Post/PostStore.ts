import { autobind } from 'core-decorators';
import { getResponse, postRequest } from 'lib/Axios';
import { action, observable } from 'mobx';
import InitialStore from 'stores/Initial';
import { IPostList, IPostView, IPostViewRes, IPostViewResObj } from 'util/types/PostTypes';
import { IPostSuccessRes } from 'util/types/Response';

@autobind
class PostStore extends InitialStore {
  @observable count: number = 0;
  @observable maxCount: number = 0;
  @observable postList: IPostView[] = [];
  @observable postInfo: IPostViewResObj | null = null;

  @action
  public handleWritePost = async (request: FormData): Promise<IPostSuccessRes> => {
    try {
      this.isLoading = true;
      const response: IPostSuccessRes = await postRequest('/posts/upload', request);
      this.isLoading = false;

      return response;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  @action
  public handleGetPosts = async (): Promise<void> => {
    try {
      this.postList = [];
      this.isLoading = true;
      const response: IPostList = await getResponse(`/posts/${this.count}`);

      this.maxCount = 10;
      const posts: IPostView[] = response.object;

      if (this.count === 0) {
        this.postList = posts;
      } else if (this.count !== 0) {
        this.postList = this.postList.concat(posts);
      }
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  @action
  public handleGetPost = async (idx: number): Promise<void> => {
    try {
      this.isLoading = true;
      const response: IPostViewRes = await getResponse(`/posts/data/${idx}`);
      const { object } = response;

      this.postInfo = object;
      this.isLoading = false;
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