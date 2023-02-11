import React from "react";
import styles from "./button.module.css";

type ButtonType = {
  text: string;
  onClick: any;
};

const Button: React.FC<ButtonType> = ({ text, onClick }) => {
  const onClickHandler = () => {
    console.log("clicked book!");
  };
  return (
    <button onClick={onClick} className={styles.main}>
      {text}
    </button>
  );
};
export default Button;
