import classNames from 'classnames/bind';
import React from 'react';

import styles from './PopperWrapper.module.scss';

const cx = classNames.bind(styles);

const PopperWrapper = ({ children }) => {
  return <span className={cx('wrapper')}>{children}</span>;
};

export default PopperWrapper;
