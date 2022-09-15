import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Please enter your email.'),

  password: yup.string().min(8).max(32).required('Please enter your password.'),
  name: yup.string().required('Please enter your name.'),
});

const SignUp = () => {
  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  return (
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
    </div>
  );
};
export default SignUp;
