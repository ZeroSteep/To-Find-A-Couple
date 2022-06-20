import { FC } from "react";
import { InputRangeProps } from ":common";
import "./styles.scss";

export const InputRange: FC<InputRangeProps> = ({ rangeValue, onChange }) => {
  return (
    <input
      type="range"
      min="2"
      max="8"
      step="2"
      value={rangeValue}
      onChange={onChange}
    />
  );
};
