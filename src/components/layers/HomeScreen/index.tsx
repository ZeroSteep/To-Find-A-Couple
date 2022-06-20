import { Menu } from ":components";
import { menuOptions } from ":utils/consts";

import "./styles.scss";

export const HomeScreen = () => {
  return (
    <div className="home_screen">
      <div>
        <h1>Найди пару</h1>
        <Menu data={menuOptions} />
      </div>
    </div>
  );
};
