import { makeAutoObservable } from "mobx";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
  clearTimer() {
    this.secondsPassed = 0;
  }
}

export const myTimer = new Timer();
