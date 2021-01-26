import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { IStoreType } from 'stores';

const useStores = (): IStoreType => {
  return useContext(MobXProviderContext) as IStoreType;
}

export default useStores;