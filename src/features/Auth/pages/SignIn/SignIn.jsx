import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { status } from '~/constants';

import { InputField } from '~/components/Form';
import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

import { authSelector, login } from '../../authSlice';

import styles from './SignIn.module.scss';

const cx = classNames.bind(styles);

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Please enter your email.'),

  password: yup.string().min(8).max(32).required('Please enter your password.'),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const { auth } = useSelector(authSelector);
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data));
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit(handleLogin)}>
      <h2 className={cx('form__heading')}>Sign In</h2>
      <InputField
        required
        id='email'
        label='Email'
        placeholder='abcxxx@gmail.com'
        error={errors.email?.message}
        register={register('email')}
      />

      <InputField
        required
        id='password'
        label='Password'
        placeholder='xxxxxxxx'
        type='password'
        error={errors.password?.message}
        register={register('password')}
      />

      <Button
        loading={auth.status === status.loading}
        className={cx('form__submit')}
        type='submit'
      >
        Login
      </Button>
      <div className={cx('form__question')}>
        <p>Forgot password?</p>
        <p>
          Don't have an account? <Link to='signup'>Sign up</Link>
        </p>
      </div>
      <div className={cx('form__label')}>
        <div></div>
        <h3>OR</h3>
        <div></div>
      </div>

      <div className={cx('form__alternative')}>
        <Button className={cx('alter_btn')} variant='outlined'>
          <Image src={images.google} alt='google_logo' />
          Google
        </Button>
        <Button className={cx('alter_btn')} variant='outlined'>
          <Image src={images.facebook} alt='facebook_logo' />
          Facebook
        </Button>
        <Button className={cx('alter_btn')} variant='outlined'>
          <Image src={images.apple} alt='apple_logo' />
          Apple
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
