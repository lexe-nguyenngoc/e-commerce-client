import classNames from 'classnames/bind';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { uid } from '~/utils';

import Container from '../Container';

import styles from './Header.module.scss';

const menu = [
  [
    {
      id: uid(),
      path: '/',
      label: 'Home',
    },
    {
      id: uid(),
      path: '/',
      label: 'About',
    },
    {
      id: uid(),
      path: '/',
      label: 'Blog',
    },
    {
      id: uid(),
      path: '/',
      label: 'Pages',
    },
    {
      id: uid(),
      path: '/',
      label: 'Contact',
    },
  ],
  [
    {
      id: uid(),
      path: '/language',
      label: 'Language',
    },
    {
      id: uid(),
      path: '/auth',
      label: 'Sign In',
    },
    {
      id: uid(),
      path: '/auth/signup',
      label: 'Sign Up',
    },
  ],
];

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <Container fluid>
      <header className={cx('header')}>
        {menu.map((block, index) => {
          return (
            <nav className={cx('header__menu')} key={index.toString()}>
              {block.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    cx('header__menu-item', {
                      active: isActive,
                    })
                  }
                  end
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          );
        })}
      </header>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
