import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import Category from 'components/Home/Category';
import useStores from 'lib/hooks/useStores';
import { IError } from 'util/types/Response';

const CategoryContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { handleCategoryList, categoryList } = store.CategoryStore;

  const requestCategoryList = useCallback(async () => {
    await handleCategoryList()
    .catch((error: IError) => {
      console.log(error);
    });
  }, [handleCategoryList]);

  useEffect(() => {
    requestCategoryList();
  }, [requestCategoryList]);

  return (
    <Category
      categoryList={categoryList}
    />
  );
});

export default CategoryContainer;