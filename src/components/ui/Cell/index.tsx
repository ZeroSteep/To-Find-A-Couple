import { FC } from "react";
import classnames from "classnames/bind";

import "./styles.scss";
import { CellProps } from ":common";

export const Cell: FC<CellProps> = ({ open, done, content, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classnames("cell", {
        show: open,
        delete: done
      })}
    >
      {open && content}
    </div>
  );
};
