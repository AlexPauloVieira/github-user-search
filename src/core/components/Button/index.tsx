import React from "react";
import "./styles.css";

type Props = {
  title: string;
  onClick?: () => any;
};

const Button = ({ title }: Props) => {
  return <button className='btn-component'>{title}</button>;
};

export default Button;
