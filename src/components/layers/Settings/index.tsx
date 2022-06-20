import { observer } from "mobx-react";
import { Button, InputRange } from ":components";
import { BoardStoreState, InputRangeState } from ":store";

import "./styles.scss";

export const Settings = observer(() => {
  const size = InputRangeState.getValue();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    InputRangeState.setValue(e.target.value);
    BoardStoreState.setState();
  };

  return (
    <div className="">
      <div className="range">
        <p>
          Размер поля: {size}x{size}
        </p>
        <InputRange rangeValue={size} onChange={handleChange} />
      </div>
      <Button text="Меню" path="/" />
    </div>
  );
});
