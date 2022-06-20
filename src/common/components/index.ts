export interface MenuProps {
  data: ButtonProps[];
}

export interface ButtonProps {
  text: string;
  path: string;
  onClick?: () => void;
}

export interface InputRangeProps {
  rangeValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CellProps {
  [key: string]: any;
  id: number;
  content: number;
  open: boolean;
  done: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface ResultsStore {
  total: number;
  failed: number;
  win: boolean;
}
