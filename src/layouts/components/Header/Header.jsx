import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { uid } from '~/utils';

import images from '~/assets/images';
import Image from '~/components/Image';
import { apiRoutes } from '~/constants';
import useClickOutside from '~/hooks/useClickOutside';

import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';
import SearchItem from '~/components/SearchItem/SearchItem';

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

const searchResultsA = [
  {
    id: uid(),
    imageSrc:
      'https://media.coolmate.me/cdn-cgi/image/width=300,height=442,quality=80/uploads/August2022/DSC05015-copy-1_43.jpg',
    imageAlt: 'item',
    tittle: 'Áo Polo thể thao nam RecycV1 ',
    priceTag: '3014.000đ',
    saleTag: '50.000đ',
  },
  {
    id: uid(),
    imageSrc:
      'https://media.coolmate.me/cdn-cgi/image/width=300,height=442,quality=80/uploads/August2022/densau.jpg',
    imageAlt: 'item',
    tittle: 'ếu đã từng mua hàng trên Websit',
    priceTag: '34.000đ',
    saleTag: '150.000đ',
  },
  {
    id: uid(),
    imageSrc:
      'https://media.coolmate.me/cdn-cgi/image/width=300,height=442,quality=80/uploads/May2022/DSC01325_copy.jpg',
    imageAlt: 'item',
    tittle: 'y, bạn có thể dùng tính nă',
    priceTag: '214.000đ',
    saleTag: '140.000đ',
  },
];
const searchResultsB = [];

const Header = ({ className }) => {
  const [isSearchMode, setIsSearchMode] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  let domNode = useClickOutside(() => {
    setIsSearchMode(true);
  });

  const handleOnSearch = (event) => {
    const searchInput = event.target.value;
    //fetch api get search
    setSearchResults(searchResultsA);
    setSearchValue(searchInput);
  };

  return (
    <header className={cx('header', className)}>
      {isSearchMode ? (
        <>
          <Image src={images.Logo} alt='logo' />
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
                onClick={() => setIsSearchMode(false)}
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
          <Tippy
            interactive={true}
            visible={!!searchValue}
            render={(attrs) => (
              <div
                className={cx('search-result')}
                tabIndex='-1'
                {...attrs}
                ref={domNode}
              >
                <PopperWrapper>
                  {searchResults.length ? (
                    searchResults.map((searchItem) => (
                      <SearchItem
                        key={searchItem.id}
                        imageSrc={searchItem.imageSrc}
                        imageAlt={searchItem.imageAlt}
                        tittle={searchItem.tittle}
                        priceTag={searchItem.priceTag}
                        saleTag={searchItem.saleTag}
                      />
                    ))
                  ) : (
                    <div className={cx('text-center')}>
                      <i>Không tìm thấy sản phẩm!</i>
                    </div>
                  )}
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('header__search-content')} ref={domNode}>
              <input
                autoFocus={true}
                placeholder='Search...'
                className={cx('header-search__control')}
                type='text'
                onChange={handleOnSearch}
                value={searchValue}
                spellCheck={false}
              />
              <span className={cx('menu-button')}>{images.search}</span>
            </div>
          </Tippy>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {};

export default Header;
