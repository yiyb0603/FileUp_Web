import isEmpty from "converter/isEmpty";
import { errorToast } from "lib/Toast";
import { PostDto } from "util/types/dto/Post.dto";

export const postWriteValidation = (request: PostDto): boolean => {
  const { title, content, category } = request;

  if (isEmpty(title) || isEmpty(content) || isEmpty(category)) {
    errorToast("값을 모두 입력해주세요!");
    return false;
  }

  return true;
}