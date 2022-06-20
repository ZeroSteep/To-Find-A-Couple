import { makeAutoObservable } from "mobx";

export class InputRangeStore {
  size = "4";

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (value: string) => {
    this.size = value;
  };

  getValue = () => {
    return this.size;
  };
}

export const InputRangeState = new InputRangeStore();
