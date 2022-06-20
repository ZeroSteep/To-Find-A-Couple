import { useEffect } from "react";
import { formatTime } from ":utils/consts";
import { observer } from "mobx-react";
import { myTimer } from ":store";

import "./styles.scss";

export const Timer = observer(() => {
  useEffect(() => {
    const timer = setInterval(() => {
      myTimer.increaseTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="timer">{formatTime(myTimer.secondsPassed)} </div>;
});
