import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import { InputField } from '~/components/Form';
import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import { status } from '~/constants';

import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../authSlice';

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
  const { auth } = useSelector(authSelector);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const handleSignUp = () => {
    console.log('test');
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit(handleSignUp)}>
      <h2 className={cx('form__heading')}>Sign Up</h2>
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
        id='name'
        label='Name'
        placeholder='Full Name'
        error={errors.name?.message}
        register={register('name')}
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
        Sign up
      </Button>
      <p>
        Don't have an account? <Link to='/auth'>Sign in</Link>
      </p>
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
          <Image src={images.facebook} alt='google_logo' />
          Facebook
        </Button>
      </div>
    </form>
  );
};
export default SignUp;
