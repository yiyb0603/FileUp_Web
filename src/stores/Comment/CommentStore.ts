import { autobind } from 'core-decorators';
import { action } from 'mobx';
import InitialStore from 'stores/Initial';
import { CommentDto } from 'util/types/dto/Comment.dto';

@autobind
export default class CommentStore extends InitialStore {
  @action
  handleWriteComment = async (commentDto: CommentDto) => {

  }
}