import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Topbar.module.scss';

const cx = classNames.bind(styles);

const Topbar = ({ className, tittle }) => {
  return (
    <div className={cx('topbar', className)}>
      <Link to='/collections'>{tittle}</Link>
    </div>
  );
};
export default Topbar;
