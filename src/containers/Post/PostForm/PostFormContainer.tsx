import React, {
  ChangeEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { observer } from 'mobx-react';
import PostForm from 'components/Post/PostForm';
import useStores from 'lib/hooks/useStores';
import groupingState from 'converter/GroupingState';
import { IError, IResponse } from 'util/types/Response';
import { ISelectFile } from 'util/types/PostTypes';
import { postWriteValidation } from 'validation/Post/PostValidation';

const PostFormContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { categoryList, handleCategoryList } = store.CategoryStore;
  const { isLoading, handleWritePost } = store.PostStore;

  const fileId: MutableRefObject<number> = useRef(0);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [files, setFiles] = useState<ISelectFile[]>([]);

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTitle(value);
  }, []);

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setContent(value);
  }, []);

  const onChangeCategory = useCallback((categoryName: string): void => {
    setCategory(categoryName);
  }, []);

  const onChangeFiles = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const selectFiles = e.target.files!;
    let tempFiles: ISelectFile[] = files;

    for (const file of selectFiles) {
      tempFiles = [
        ...tempFiles,
        {
          id: fileId.current++,
          object: file,
        }
      ];
    }

    setFiles(tempFiles);
  }, [files]);

  const handleFilterFile = useCallback((id: number): void => {
    setFiles(files.filter((file: ISelectFile) => file.id !== id));
  }, [files]);

  const requestWritePost = useCallback(async (): Promise<void> => {
    if (!postWriteValidation({ title, content, category })) {
      return;
    }

    const formData: FormData = new FormData();
    formData.append("post.title", title);
    formData.append("post.content", content);
    formData.append("post.category.name", category);
    
    for (const { object } of files) {
      formData.append('file', object);
    }

    await handleWritePost(formData)
    .then((response: IResponse) => {
      console.log(response);
    })

    .catch((error: IError) => {
      console.log(error);
    });
  }, [category, content, files, handleWritePost, title]);

  useEffect(() => {
    handleCategoryList();
  }, [handleCategoryList]);
  
  return (
    <PostForm
      isLoading={isLoading}
      titleObject={groupingState('title', title, onChangeTitle)}
      contentObject={groupingState('content', content, onChangeContent)}
      categoryObject={groupingState('category', category, onChangeCategory)}
      filesObject={groupingState('files', files, onChangeFiles)}
      categoryList={categoryList}
      handleFilterFile={handleFilterFile}
      requestWritePost={requestWritePost}
    />
  );
});

export default PostFormContainer;