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

import { authSelector, login } from '../../authSlice';

import styles from './SignIn.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

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
      <form className={cx('form')} onSubmit={handleSubmit(handleLogin)}>
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
          className={cx('form__create')}
          type='submit'
        >
          Login
        </Button>
        <p>
          Don't have an account? <Link to='signup'>Sign up</Link>
        </p>
        <h3>OR</h3>
        <div className={cx('form__alternative')}>
          <Button variant='outlined'>
            <Image src={images.google} />
            Sign in with Google
          </Button>
          <Button variant='outlined'>
            <Image src={images.facebook} />
            Sign in with Facebook
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
