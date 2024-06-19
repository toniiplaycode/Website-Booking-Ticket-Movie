import BarLoader from "react-spinners/BarLoader";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignin, toggleSignup } from "../reducers/modalSigninSignup";
import { useEffect, useState } from "react";
import { fetchInforUser, postLogin } from "../reducers/apiLoginLogout";

const LoginModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CheckEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const roleUserJWT = useSelector((state) => state.apiLoginLogout.roleUserJWT);
  const token = useSelector((state) => state.apiLoginLogout.token);

  useEffect(() => {
    if (token && roleUserJWT) {
      dispatch(fetchInforUser(roleUserJWT.id));
    }
  }, [roleUserJWT]);

  const handleCheck = () => {
    let check = true;
    if (email.trim().length == 0) {
      setCheckEmail(true);
      check = false;
    }
    if (password.trim().length == 0) {
      setCheckPassword(true);
      check = false;
    }
    return check;
  };

  return (
    <div className="login-form">
      <div className="signup-form-heading">
        <h2 className="signup-form-heading-text">Đăng nhập tài khoản</h2>
        <button type="button" className="btn-form-exit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="form-icon"
            viewBox="0 0 512 512"
            onClick={() => dispatch(toggleSignin())}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
      </div>

      <div className="signup-form-body">
        <div className="signup-form-category">
          <label>
            Email: <span>*</span>
            {CheckEmail && (
              <span className="warning-login-signup">Chưa điền email !</span>
            )}
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setCheckEmail(false);
            }}
            name="email"
            type="email"
            placeholder="Nhập Email"
            required
          />
        </div>

        <div className="signup-form-category">
          <label>
            Password: <span>*</span>
            {checkPassword && (
              <span className="warning-login-signup">Chưa điền password !</span>
            )}
          </label>
          <div className="input-password">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setCheckPassword(false);
              }}
              name="password"
              type="password"
              placeholder="Nhập Password"
              required
            />
            <button type="button" className="pass-icon-btn"></button>
          </div>
        </div>

        <span>
          Bạn chưa có tài khoản? &nbsp;
          <span
            className="change-modal"
            onClick={() => {
              dispatch(toggleSignin());
              dispatch(toggleSignup());
            }}
          >
            đăng ký
          </span>
        </span>
        <button
          type="submit"
          className="btn-reg"
          onClick={() => {
            if (handleCheck()) {
              dispatch(postLogin({ email, password }));
              dispatch(toggleSignin());
            }
          }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
