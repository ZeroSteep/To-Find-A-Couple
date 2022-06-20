import { Button } from ":components";
import { InputRangeState, myTimer, BoardStoreState } from ":store";
import { formatTime } from ":utils/consts";

import "./styles.scss";

export const Results = () => {
  const { size } = InputRangeState;
  const { secondsPassed } = myTimer;
  const { total, failed } = BoardStoreState.result;

  return (
    <div className="">
      <div className="title">
        <h2>Результаты</h2>
      </div>
      <div className="description">
        <p>
          Размер игрового поля: {size}x{size}
        </p>
        <p>Вы справились за {formatTime(secondsPassed)}</p>
        <p>Всего попыток: {total}</p>
        <p>Количество неверных попыток: {failed}</p>
        <p>Общий результат: {Math.floor((failed / total) * 100)}%</p>
      </div>
      <Button text="Меню" path="/" />
    </div>
  );
};
