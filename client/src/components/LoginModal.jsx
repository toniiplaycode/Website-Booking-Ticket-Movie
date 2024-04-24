import BarLoader from "react-spinners/BarLoader";
import { useDispatch } from "react-redux";
import { hiddenSignin } from "../reducers/modalSigninSignup";


const LoginModal = () => {
    const dispatch = useDispatch();

    return(
        <div className="login-form">
            <form
                onSubmit={(e) => {
                }}
            >
                <div className="signup-form-heading">
                        <h2 className="signup-form-heading-text">
                            Đăng nhập tài khoản 
                        </h2>
                    <button
                        type="button"
                        className="btn-form-exit"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="form-icon"
                            viewBox="0 0 512 512"
                            onClick={()=> dispatch(hiddenSignin())}
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
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Nhập Email"
                            required
                        />
                    </div>
        
                    <div className="signup-form-category">
                        <label>
                            Password: <span>*</span>
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
        
                    <button type="submit" className="btn-reg">
                        {/* <BarLoader color="#e6e6e8" /> : "Sign in"} */}
                        Đăng nhập
                    </button>
                </div>
            </form>
      </div>
    )
}

export default LoginModal