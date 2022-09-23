import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';
import classNames from 'classnames/bind';
import images from './../../assets/images/index';
import Image from '~/components/Image';
// import Form from "./../Form/Form";

const cx = classNames.bind(styles);

function Select({ options, tooltip, label, children }) {
  return (
    // <Form options={options}>
    //   <div className={cx("wrapper")}>
    //     <span className={cx("tooltip")}>{tooltip}</span>
    //     <div className={cx("heading")}>{label}</div>
    //     <Image
    //       src={images.dropdown}
    //       className={cx("dropdown_btn")}
    //       alt="dropdown"
    //     ></Image>
    //     <input
    //       className={cx("input_value")}
    //       aria-hidden="true"
    //       tabindex="-1"
    //       value=""
    //     />
    //     {children}
    //   </div>
    // </Form>
    <div>Select</div>
  );
}

export default Select;
