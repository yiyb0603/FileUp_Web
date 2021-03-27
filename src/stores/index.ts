import AuthStore from './Auth';
import InitialStore from './Initial';
import PostStore from './Post';
import CategoryStore from './Category';
import UserStore from './User';
import CommentStore from './Comment';

export interface IStoreType {
  store: {
    AuthStore: typeof AuthStore;
    InitialStore: InitialStore,
    PostStore: typeof PostStore,
    CategoryStore: typeof CategoryStore,
    UserStore: typeof UserStore,
    CommentStore: typeof CommentStore,
  };
}

const stores = {
  AuthStore,
  InitialStore,
  PostStore,
  CategoryStore,
  UserStore,
  CommentStore,
};

export default stores;
