import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const FormGroup = ({ children, required, id, className, label, error }) => {
  return (
    <div className={cx('form-group', className)}>
      <label htmlFor={id} className={cx('form-group__label', { required })}>
        {label}
      </label>
      {children}
      <span className={cx('form-group__error', { visible: !!error })}>
        {error}
      </span>
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default FormGroup;
