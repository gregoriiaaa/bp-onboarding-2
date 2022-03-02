import React, { MouseEvent } from "react";
import "./button.css";

// HINT: Use this in ButtonProps to determine how the button is styled
export enum ButtonType {
  "button-green",
  "button-white",
  "button-clear",
  "button-clearAlt",
}

// HINT: Use this in ButtonProps to determine how the button text is styled
export enum ButtonTextType {
  "button-text-white",
  "button-text-green",
  "button-text-grey",
}

interface ButtonProps {
  text: string;
  buttonType: string;
  textType: string;
  children?: React.ReactNode;
  onPress?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonType,
  textType,
  children,
  onPress,
}) => {
  const clickHandler = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void => {
    e.preventDefault();
    onPress();
  }
  return (
    <button onClick={clickHandler} className="App-button" id={buttonType}>
      <p className="App-button-text" id={textType}>
        {text}
      </p>
    </button>
  );
};

export default Button;