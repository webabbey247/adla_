"use client";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </button>
);

export default Button;
