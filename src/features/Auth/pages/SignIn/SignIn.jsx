import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import styles from "./SignIn.module.scss";

import image from "~/assets/images"
import Image from "~/components/Image"

const cx = classNames.bind(styles);

const messageRequired = "This field cannot be empty.";
const messageEmailErr = "Please enter a valid email address.";

const SigninSchema = yup.object().shape({
  email: yup.string().email(messageEmailErr).required(messageRequired),
  password: yup.string().min(8).max(32).required(messageRequired),
});

const SignIN = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(SigninSchema),
    });

    const onSubmitHandler = data => navigate("/")

    return (
        <div>
            <form className={cx("login")} onSubmit={handleSubmit(onSubmitHandler)}>
                <h2 className={cx("text")}>Sign in</h2>
                <h3 className={cx("text")}>Sign in and start managing your candidates!</h3>
                <div className={cx("login__input")}>
                    <input type="text" placeholder="email" {...register("email", { required: true })} />
                    {errors.email && <span>{errors.email?.message}</span>}
                </div>
                <div className={cx("login__input")}>
                    <input type="password" placeholder="password" {...register("password", { required: true })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className={cx("login__tool")}>
                    <div className={cx("flex")}>
                        <input type="checkbox" id="#" name="" value="" />
                        <p className={cx("text", "toolText")}>Remember Me</p>
                    </div>
                    <p className={cx("text", "toolText")}>Forgot password?</p>
                </div>
                <input className={cx("text")} type="submit" />
              <Image className={cx("login__bg")} src={image.signInBackground} alt="signInBackground"></Image>
            </form>
        </div>
    );
};

export default SignIN;