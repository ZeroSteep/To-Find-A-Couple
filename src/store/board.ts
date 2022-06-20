import { makeAutoObservable } from "mobx";
import { CellProps, ResultsStore } from ":common";
import { shuffle } from ":utils/consts";
import { InputRangeState, myTimer } from ":store";

export class BoardStore {
  grid: [] | CellProps[] = [];
  openCells: number[] = [];
  result: ResultsStore = {
    total: 0,
    failed: 0,
    win: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    myTimer.clearTimer();
    this.setState();
    this.setOnClear();
    this.result.win = false;
  }

  setOnClear() {
    this.openCells = [];
  }

  setState() {
    this.grid = shuffle(Number(InputRangeState.getValue()));
  }
  getState() {
    return this.grid;
  }

  onClickCell(item: CellProps, index: number) {
    if (this.openCells.length === 2) return;

    this.openCells.push(index);
    this.grid.splice(index, 1, { ...item, open: true });
  }

  isCellEqual() {
    const firstItem = this.grid[this.openCells[0]];
    const secondItem = this.grid[this.openCells[1]];

    if (firstItem.id === secondItem.id) {
      firstItem.done = true;
      secondItem.done = true;
    } else {
      this.result.failed++;
    }

    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].open = false;
    }
    this.result.win = this.grid.every((item) => item.done);
    this.result.total++;
    this.setOnClear();
  }
}

export const BoardStoreState = new BoardStore();
