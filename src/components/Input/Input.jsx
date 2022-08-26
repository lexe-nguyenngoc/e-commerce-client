import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Input.module.scss"
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


function Input({ className, name, type ="text", placeholder, register,  children, ...rest }) {
    return(
        <span className={cx("input")}>
            <input className={className} type={type} {...register(name)} placeholder={placeholder} {...rest} />
            {children}
        </span>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Input
