import { CellProps } from ":common";
import { Button, Cell, Timer } from ":components";
import { InputRangeState, BoardStoreState } from ":store";
import { useEffect } from "react";
import { observer } from "mobx-react";

import "./styles.scss";
import { Results } from "../Results";

export const TableCell = observer(() => {
  const style = {
    gridTemplateColumns: `repeat(${InputRangeState.getValue()}, 1fr)`,
    gridTemplateRows: `repeat(${InputRangeState.getValue()}, 1fr)`
  };
  const grid = BoardStoreState.getState();

  useEffect(() => {
    BoardStoreState.reset();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (BoardStoreState.openCells.length === 2) {
        BoardStoreState.isCellEqual();
      }
    }, 1300);

    return () => clearTimeout(timer);
  });

  const handleClick = (item: CellProps, index: number) => () => {
    BoardStoreState.onClickCell(item, index);
  };

  return (
    <>
      {!BoardStoreState.result.win ? (
        <div>
          <div>
            <Timer />
          </div>
          <div className="board" style={style}>
            {grid.map((itemCell, i) => (
              <Cell key={i} onClick={handleClick(itemCell, i)} {...itemCell} />
            ))}
          </div>
          <Button text="Меню" path="/" />
        </div>
      ) : (
        <Results />
      )}
    </>
  );
});
