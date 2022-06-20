export const menuOptions = [
  { text: "Играть", path: "/game" },
  { text: "Настройки", path: "/settings" },
  { text: "Правила", path: "/rules" }
];

function leadingZero(sec: number): string | number {
  return sec < 10 ? `0${sec}` : sec;
}

export const formatTime = (sec: number): string => {
  const hours = leadingZero(Math.floor(sec / 60 / 60));
  const minutes = leadingZero(Math.floor(sec / 60) - Number(hours) * 60);
  const seconds = leadingZero(sec % 60);

  return `${minutes}:${seconds}`;
};

const numberGenerator = (sizeArray: number) => {
  const size = (sizeArray * sizeArray) / 2;
  const grid = [];

  for (let index = 1; index < size + 1; index++) {
    grid.push({
      id: index,
      content: index,
      open: false,
      done: false
    });
  }

  return [...grid, ...grid];
};

export const shuffle = (sizeArray: number) => {
  const numberArray = numberGenerator(sizeArray);
  for (let i = numberArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
  }
  return numberArray;
};
