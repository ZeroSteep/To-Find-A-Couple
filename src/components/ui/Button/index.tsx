import { FC } from "react";
import { ButtonProps } from ":common";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Button: FC<ButtonProps> = ({ text, path, onClick }) => {
  return (
    <>
      <Link onClick={onClick} className="btn" to={path}>
        {text}
      </Link>
    </>
  );
};
