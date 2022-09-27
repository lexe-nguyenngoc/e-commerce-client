import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SearchItem.module.scss';
import Image from '../Image';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const SearchItem = ({ imageSrc, imageAlt, tittle, priceTag, saleTag }) => {
  return (
    <NavLink to='/item' className={cx('product-search')}>
      <Image
        className={cx('product-search__thumbnail')}
        src={imageSrc}
        alt={imageAlt}
      />
      <div className={cx('product-search__content')}>
        <h3 className={cx('product-search__tittle')}>{tittle}</h3>
        <div className={cx('product-search__prices')}>
          <del>{priceTag}</del>
          <ins>{saleTag}</ins>
        </div>
      </div>
    </NavLink>
  );
};

SearchItem.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  tittle: PropTypes.string,
  priceTag: PropTypes.string,
  saleTag: PropTypes.string,
};

export default SearchItem;
