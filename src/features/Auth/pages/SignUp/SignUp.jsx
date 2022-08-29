import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import styles from "./SignUp.module.scss";

import image from "~/assets/images";
import Image from "~/components/Image";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { signUp } from "~/services/auth";

const cx = classNames.bind(styles);

const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),

  password: yup.string().min(8).max(32).required("Please enter your password."),
  name: yup.string().required("Please enter your name."),
});

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const onSubmitHandler = (data) => {
    if (signUp(data)) {
      navigate("/auth");
    }
    return;
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
        <div className={"form__input"}>
          <span>Full Name</span>
          <Input
            className={cx("input-text")}
            name="name"
            placeholder="John Doe"
            register={register}
          />
          {errors.name && (
            <span className={cx("input__hint")}>{errors.name?.message}</span>
          )}
        </div>
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

        <Button className={cx("form__create")}>Create Account</Button>
        <p>
          Already have an account? <Link to="/auth">Log in</Link>
        </p>
        <h3>OR</h3>
        <div className={cx("form__alternative")}>
          <Button
            leftIcon={<Image src={image.google} alt="google picture"></Image>}
          >
            Sign up with Google
          </Button>
          <Button
            leftIcon={
              <Image src={image.facebook} alt="facebook picture"></Image>
            }
          >
            Sign up with Facebook
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
