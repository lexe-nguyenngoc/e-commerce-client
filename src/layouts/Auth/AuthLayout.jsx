import classNames from 'classnames/bind';
import styles from './AuthLayout.module.scss';

import Header from '../components/Header';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
  return (
    <div className={cx('auth-layout')}>
      <Header />
      {children}
    </div>
  );
};

export default AuthLayout;
