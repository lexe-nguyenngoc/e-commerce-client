import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { uid } from '~/utils';

import images from '~/assets/images';
import Image from '~/components/Image';
import { apiRoutes } from '~/constants';
import useClickOutside from '~/hooks/useClickOutside';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const headerMenu = [
  {
    id: uid(),
    path: apiRoutes.AUTH,
    label: 'SALE',
  },
  {
    id: uid(),
    path: '/collections',
    label: 'Collections',
  },

  {
    id: uid(),
    path: '/',
    label: 'About Shopka',
  },
  {
    id: uid(),
    path: '/size-chart',
    label: 'Size chart',
  },
  {
    id: uid(),
    path: '/',
    label: 'Contact',
  },
];

const Header = ({ className }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  let domNode = useClickOutside(() => {
    setIsSearchOpen(true);
  });

  return (
    <header className={cx('header', className)}>
      {isSearchOpen ? (
        <>
          <Image src={images.Logo} />
          <nav className={cx('header__menu')}>
            {headerMenu.map((item) => (
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
          <nav className={cx('header__actions')}>
            <div className={cx('header__actions-button')}>
              <span
                className={cx('menu-button')}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {images.search}
              </span>
            </div>
            <div className={cx('header__actions-button')}>
              <span className={cx('menu-button')}>{images.user}</span>
            </div>

            <div className={cx('header__actions-button')}>
              <NavLink
                to='/cart'
                className={({ isActive }) =>
                  cx('header__menu-item', {
                    active: isActive,
                  })
                }
                end
              >
                <span className={cx('menu-button')}>{images.cart}</span>
              </NavLink>
            </div>
          </nav>
        </>
      ) : (
        <div className={cx('header__search')}>
          <div className={cx('header__search-content')} ref={domNode}>
            <input
              placeholder='Search...'
              className={cx('header-search__control')}
              type='text'
            />
            <span className={cx('menu-button')}>{images.search}</span>
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {};

export default Header;
