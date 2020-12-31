import { autobind } from "core-decorators";
import { observable } from "mobx";

@autobind
class InitialStore {
  @observable
  protected isLoading: boolean = false;
}

export default InitialStore;