import classNames from 'classnames/bind';
import React from 'react';
import styles from './Shopping.module.scss';
import Button from './../../components/Button/Button';

import Select from './../../components/Select/Select';

const cx = classNames.bind(styles);

const Shopping = (props) => {
  return (
    <div>Shopping</div>
    // <main>
    //   <ul className={cx('options')}>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faTshirt} />}
    //         className={cx('btn')}
    //       >
    //         Clothing & Shoes
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faFilm} />}
    //         className={cx('btn')}
    //       >
    //         Entertainment
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faMusic} />}
    //         className={cx('btn')}
    //       >
    //         Music
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faHeart} />}
    //         className={cx('btn')}
    //       >
    //         Sport & Lifestyle
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faPaw} />}
    //         className={cx('btn')}
    //       >
    //         Pets
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faCutlery} />}
    //         className={cx('btn')}
    //       >
    //         Kitchen Accessories
    //       </Button>
    //     </li>

    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faPlane} />}
    //         className={cx('btn')}
    //       >
    //         Travel Equipment
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faLeaf} />}
    //         className={cx('btn')}
    //       >
    //         Growing & Garden
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faPlug} />}
    //         className={cx('btn')}
    //       >
    //         Electrical Tools
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faShoppingCart} />}
    //         className={cx('btn')}
    //       >
    //         Mother Care
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faCandyCane} />}
    //         className={cx('btn')}
    //       >
    //         Toys & Entertainment
    //       </Button>
    //     </li>
    //     <li className={cx('option_item')}>
    //       <Button
    //         aboveIcon={<FontAwesomeIcon icon={faPalette} />}
    //         className={cx('btn')}
    //       >
    //         Vintage
    //       </Button>
    //     </li>
    //   </ul>
    //   <body>
    //     <section className={cx('handler')}>
    //       <div className={cx('sort')}>
    //         <span className={cx('select')}>
    //           <Select
    //             options={['car', 'flight', 'bike']}
    //             tooltip='SORT BY'
    //             label='Useless first'
    //           />
    //           <Select
    //             options={['car', 'flight', 'bike']}
    //             tooltip='TYPE'
    //             label='Condition'
    //           />
    //           <Select
    //             options={['car', 'flight', 'bike']}
    //             ooltip='SHIPMENT'
    //             label='Delivery option'
    //           />
    //         </span>
    //       </div>
    //       <div className='arrange'></div>
    //     </section>
    //   </body>
    // </main>
  );
};

export default Shopping;
