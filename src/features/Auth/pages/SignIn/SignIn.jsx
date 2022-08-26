import React from 'react'
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import image from "~/assets/images";
import Image from "~/components/Image";
import { Input } from "~/components/Input";

import styles from "./SignIn.module.scss";
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),

  password: yup.string().min(8).max(32).required("Please enter your password."),
});

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });
  const onSubmitHandler = (data) => {
    navigate("/")
  };

  return (
    <div className={cx("wrapper")}>
      <form className={cx("login")} onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className={cx("text")}>Login</h2>
        <h3 className={cx("text")}>
          Sign in and start managing your candidates!
        </h3>
        <div className={cx("input")}>
          <Input name="email" placeholder="email" register={register} />
          {errors.email && <span className={cx("input__hint")}>{errors.email?.message}</span>}
        </div>
        <div className={cx("input")}>
          <Input name="password" type="password" placeholder="password" register={register} />
          {errors.password && <span className={cx("input__hint")}>{errors.password.message}</span>}
        </div>
        <div className={cx("login__tool")}>
          <div className={cx("flex")}>
            <input type="checkbox" id="#" name="" value="" />
            <p className={cx("text", "toolText")}>Remember Me</p>
          </div>
          <p className={cx("text", "toolText")}>Forgot password?</p>
        </div>
        <Button>Login</Button>
        <Image
          className={cx("login__bg")}
          src={image.signInBackground}
          alt="signInBackground"
        ></Image>
      </form>
    </div>
  );
};

export default SignIn;
