import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

const Container = ({ children, fluid }) => {
  return (
    <div
      className={cx('container', {
        fluid,
      })}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

export default Container;
