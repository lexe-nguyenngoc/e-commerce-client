import React from 'react';
import classNames from 'classnames/bind';

import styles from './AuthLayout.module.scss';

import Header from '../components/Header';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
  return (
    <div className={cx('auth-layout')}>
      <Header />
      <div className={cx('wrapper')}>
        <section className={cx('hero')}>
          <h2>
            Sign up and
            <p>Join top 1 E-commerce</p>
          </h2>
          <p>
            Lorem ipsum dolor.
            <span> Beatae eaque</span>
          </p>
        </section>
        <section className={cx('form')}>{children}</section>
      </div>
    </div>
  );
};

export default AuthLayout;
