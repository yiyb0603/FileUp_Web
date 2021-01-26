import { autobind } from "core-decorators";
import { observable } from "mobx";

@autobind
class InitialStore {
  @observable
  public isLoading: boolean = false;
}

export default InitialStore;