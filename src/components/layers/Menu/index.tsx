import { FC, useMemo } from "react";

import { MenuProps } from ":common";
import { Button } from ":components";
import "./styles.scss";

export const Menu: FC<MenuProps> = ({ data }) => {
  const memoMenu = useMemo(
    () =>
      data.map((item) => (
        <Button key={item.path} text={item.text} path={item.path} />
      )),
    [data]
  );

  return <div>{memoMenu}</div>;
};
