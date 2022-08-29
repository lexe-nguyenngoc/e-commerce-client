import { Link, Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import { https } from "~/services";
import styles from "./AuthLayout.module.scss";
import { Button } from "~/components/Button";

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <nav>
        <ul className={cx("navigate-section")}>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <ul className={cx("module-section")}>
          <li>English</li>
          <li>Sign in</li>
          <Link to="signup" className={cx("highlight")}>
            Register
          </Link>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
