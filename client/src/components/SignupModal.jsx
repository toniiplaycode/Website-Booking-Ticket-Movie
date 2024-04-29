import { useDispatch } from "react-redux";
import { toggleSignin, toggleSignup } from "../reducers/modalSigninSignup";

const SignupModal = () => {
  const dispatch = useDispatch();

    return(
        <div className="signup-form">
          <form onSubmit={(e) => {}}>
            <div className="signup-form-heading">
              <h2 className="signup-form-heading-text">
                Đăng ký tài khoản
              </h2>
              <button
                type="button"
                className="btn-form-exit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="form-icon"
                  viewBox="0 0 512 512"
                  onClick={()=> dispatch(toggleSignup())}
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
            <div className="signup-form-category first-last-name">
                <div>
                  <label>
                    Họ: <span>*</span>
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Nhập họ"
                    required
                  />
                </div>
                <div>
                  <label>
                    Tên: <span>*</span>
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Nhập tên"
                    required
                  />
                </div>
            </div>
    
              <div className="signup-form-category">
                <label>
                  Số điện thoại (Phải chứa 11 số): <span>*</span>
                </label>
                <input
                  name="phoneNumber"
                  type="number"
                  placeholder="Nhập số"
                  required
                />
              </div>

              <div className="signup-form-category">
                <label>
                  Địa chỉ: <span>*</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Nhập địa chỉ"
                  required
                />
              </div>
    
              <div className="signup-form-category">
                <label>
                  Email: <span>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  required
                />
              </div>
    
              <div className="signup-form-category">
                <label>
                  Password (Ít nhất 8 ký tự): <span>*</span>
                </label>
                <div className="input-password">
                  <input
                    name="password"
                    // type={passViewState ? "text" : "password"}
                    placeholder="Nhập Password"
                    required
                  />
                  <button
                    type="button"
                    className="pass-icon-btn"
                  >
                  </button>
                </div>
              </div>
              <span>Bạn đã có tài khoản? &nbsp;
                  <span
                      className="change-modal"
                      onClick={()=>{
                          dispatch(toggleSignup());
                          dispatch(toggleSignin());
                      }}
                  >
                      đăng nhập
                  </span>
              </span>
              <button type="submit" className="btn-reg">
                {/* {loading ? <BarLoader color="#e6e6e8" /> : "Sign up"} */}
                Đăng ký
              </button>
            </div>
          </form>
        </div>
    )
}

export default SignupModal;
