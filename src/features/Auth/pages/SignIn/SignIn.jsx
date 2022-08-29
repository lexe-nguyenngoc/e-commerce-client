import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import styles from "./SignIn.module.scss";

import image from "~/assets/images";
import Image from "~/components/Image";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { signIn } from "~/services/auth";

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
    if (signIn(data)) {
      navigate("/");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <section className={cx("hero")}>
        <h2>
          Sign up and
          <p>Join top 1 E-commerce</p>
        </h2>
        <p>
          Lorem ipsum dolor.
          <span> Beatae eaque</span>
        </p>
      </section>
      <form className={cx("form")} onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <span>Email</span>
          <Input
            className={cx("input-text")}
            name="email"
            placeholder="email"
            register={register}
          />
          {errors.email && (
            <p className={cx("input__hint")}>{errors.email?.message}</p>
          )}
        </div>
        <div>
          <span>Password</span>
          <Input
            className={cx("input-text")}
            name="password"
            type="password"
            placeholder="password"
            register={register}
          />
          {errors.password && (
            <span className={cx("input__hint")}>
              {errors.password?.message}
            </span>
          )}
        </div>
        <Button className={cx("form__create")}>Login</Button>
        <p>
          Don't have an account? <Link to="signup">Sign up</Link>
        </p>
        <h3>OR</h3>
        <div className={cx("form__alternative")}>
          <Button
            leftIcon={<Image src={image.google} alt="google picture"></Image>}
          >
            Sign in with Google
          </Button>
          <Button
            leftIcon={
              <Image src={image.facebook} alt="facebook picture"></Image>
            }
          >
            Sign in with Facebook
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
