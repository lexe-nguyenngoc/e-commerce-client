import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    { children, loading, disabled, className, type, color, variant, ...rest },
    ref
  ) => {
    let WrapComp = 'button';

    if (rest.href) {
      WrapComp = 'a';
    } else if (rest.to) {
      WrapComp = Link;
    }

    return (
      <WrapComp
        className={cx('btn', className, color, variant)}
        ref={ref}
        type={type}
        disabled={loading || disabled}
        {...rest}
      >
        {loading ? <AiOutlineLoading3Quarters /> : children}
      </WrapComp>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  type: 'button',
  color: 'primary',
  variant: 'contained',
};

export default Button;
