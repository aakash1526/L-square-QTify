import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, image }) => {
  return (
    <button className={styles.button}>
      {image && <img src={image} alt="button icon" className={styles.icon} />}
      {text}
    </button>
  );
};

export default Button;