import React from "react";
import "./styles.css";

type Props = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
};

const Button = ({ title, onClick }: Props) => {
  return (
    <button className='btn-component' onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
