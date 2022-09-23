import React from 'react';
import classNames from 'classnames/bind';

import styles from './AuthLayout.module.scss';

import Header from '../components/Header';
import Topbar from '../components/Topbar';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
  const topBarTittle = 'Enter CMVOU30N for a 30% discount';

  return (
    <>
      <header className={cx('site-header')}>
        <Topbar className={cx('topbar')} tittle={topBarTittle} />
        <Header className={cx('header')} />
      </header>
      <div className={cx('body-wrapper')}>
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
    </>
  );
};

export default AuthLayout;
