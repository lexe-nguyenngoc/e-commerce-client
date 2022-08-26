import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from "./Button.module.scss"

const cx = classNames.bind(styles);

function Button({className, onClick, type = "submit", children, ...rest}) {
    // let Wrapper = <Button />
   
  return (
    <span className={cx("wrapper")}>
        <button className={className} onCLick={onClick} {...rest}>{children}</button>
    </span>
  )
}

Button.propTypes = {}

export default Button
