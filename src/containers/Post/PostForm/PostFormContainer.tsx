import React, {
  ChangeEvent,
  KeyboardEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import PostForm from 'components/PostForm';
import useStores from 'lib/hooks/useStores';
import groupingState from 'converter/GroupingState';
import { IError, IPostSuccessRes } from 'util/types/Response';
import { ISelectFile } from 'util/types/PostTypes';
import { postWriteValidation } from 'validation/Post/PostValidation';
import { successToast } from 'lib/Toast';

const PostFormContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { categoryList, handleCategoryList } = store.CategoryStore;
  const { isLoading, handleWritePost } = store.PostStore;

  const history: History<unknown> = useHistory();
  const fileId: MutableRefObject<number> = useRef(0);
  const dragRef = useRef<HTMLLabelElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [files, setFiles] = useState<ISelectFile[]>([]);
  
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>('');

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

  const onChangeFiles = useCallback((e: ChangeEvent<HTMLInputElement> | any): void => {
    let selectFiles: File[] = [];
    let tempFiles: ISelectFile[] = files;

    if (e.type === 'drop') {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }

    for (const file of selectFiles) {
      tempFiles = [
        ...tempFiles,
        {
          id: fileId.current++,
          file,
        }
      ];
    }

    setFiles(tempFiles);
  }, [files]);

  const handleFilterFile = useCallback((id: number): void => {
    setFiles((files) => files.filter((file: ISelectFile) => file.id !== id));
  }, []);

  const onChangeTagInput = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTagInput(value);
  }, []);

  const onKeydownTagInput = useCallback((e: KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (key === 'Enter' || key === ',') {
      setTags((tags: string[]) => [...tags, tagInput]);
      setTagInput('');
    }
  }, [tagInput]);

  const handleFilterTag = useCallback((paramTag: string): void => {
    setTags((tags: string[]) => tags.filter((tag: string) => tag !== paramTag));
  }, []);

  const requestWritePost = useCallback(async (): Promise<void> => {
    if (!postWriteValidation({ title, content, category })) {
      return;
    }

    const formData: FormData = new FormData();
    formData.append('post.title', title);
    formData.append('post.content', content);
    formData.append('post.category.name', category);

    for (const tag of tags) {
      formData.append('tags', tag);
    }
    
    for (const { file } of files) {
      formData.append('files', file);
    }

    await handleWritePost(formData)
    .then((response: IPostSuccessRes) => {
      const { status, object: { id } } = response;
      
      if (status === 200) {
        successToast('글을 작성하였습니다.');
        history.push(`/post/${id}`);
      }
    })

    .catch((error: IError) => {
      console.log(error);
    });
  }, [category, content, files, handleWritePost, history, tags, title]);

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault(); 
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    onChangeFiles(e);
    setIsDragging(false);
  }, [onChangeFiles]);

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  useEffect(() => {
    handleCategoryList();
  }, [handleCategoryList]);
  
  return (
    <PostForm
      isLoading={isLoading}
      isDragging={isDragging}
      dragRef={dragRef}
      titleObject={groupingState('title', title, onChangeTitle)}
      contentObject={groupingState('content', content, onChangeContent)}
      categoryObject={groupingState('category', category, onChangeCategory)}
      filesObject={groupingState('files', files, onChangeFiles)}
      categoryList={categoryList}
      handleFilterFile={handleFilterFile}
      tags={tags}
      tagInputObject={groupingState('tagInput', tagInput, onChangeTagInput)}
      onKeydownTagInput={onKeydownTagInput}
      handleFilterTag={handleFilterTag}
      requestWritePost={requestWritePost}
    />
  );
});

export default PostFormContainer;