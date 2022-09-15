import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import FormGroup from './FormGroup';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const InputField = ({
  required,
  id,
  className,
  label,
  type,
  error,
  register,
  ...rest
}) => {
  return (
    <FormGroup
      required={required}
      id={id}
      className={className}
      label={label}
      error={error}
    >
      <input
        type={type}
        className={cx('input-field')}
        {...register}
        {...rest}
      />
    </FormGroup>
  );
};

InputField.propTypes = {
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.object,
};

InputField.defaultValue = {
  required: false,
  type: 'text',
  register: {},
};

export default InputField;
