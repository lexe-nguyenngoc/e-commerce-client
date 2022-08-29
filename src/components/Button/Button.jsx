import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  className,
  onClick,
  type = "submit",
  leftIcon,
  rightIcon,
  children,
  ...rest
}) {
  // let Wrapper = <Button />

  return (
    <button className={className} onClick={onClick} {...rest}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("heading")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </button>
  );
}

Button.propTypes = {};

export default Button;
