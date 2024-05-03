import { useDispatch } from "react-redux";
import { toggleSignin, toggleSignup } from "../reducers/modalSigninSignup";
import { useState } from "react";
import { postSignup } from "../reducers/apiSignup";

const SignupModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [CheckEmail, setCheckEmail] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkFirstName, setCheckFirstName] = useState(false);
  const [checkLastName, setCheckLastName] = useState(false);
  const [checkAddress, setCheckAddress] = useState(false);
  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = (e) => {
    return emailRegex.test(e);
  }

  console.log(isValidEmail());

  const handleCheck = () => {
    let check = true;
    if(email.trim().length == 0){
        setCheckEmail(true);
        check = false;
    }
    if(email.trim().length > 0){
        if(!isValidEmail(email)) {
          setCheckValidEmail(true);
          check = false;
        }
    }
    if(email.trim().length == 0){
        setCheckEmail(true);
        check = false;
    }
    if(password.trim().length < 8) {
        setCheckPassword(true);
        check = false;
    }
    if(lastName.trim().length == 0) {
        setCheckLastName(true);
        check = false;
    }
    if(firstName.trim().length == 0) {
        setCheckFirstName(true);
        check = false;
    }
    if(address.trim().length == 0) {
        setCheckAddress(true);
        check = false;
    }
    if(phoneNumber.trim().length < 10) {
        setCheckPhoneNumber(true);
        check = false;
    }
    return check;
  }

    return(
        <div className="signup-form">
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
                <div>
                  <label>
                    Họ: <span>*</span> 
                    {checkLastName && <span className="warning-login-signup">Chưa điền họ !</span>}
                  </label>
                  <input
                    onChange={(e)=>{
                      setLastName(e.target.value)
                      setCheckLastName(false)
                    }}
                    name="firstName"
                    type="text"
                    placeholder="Nhập họ"
                    required
                  />
                </div>
              </div>
              
              <div>
                <div>
                  <label>
                    Tên: <span>*</span>
                    {checkFirstName && <span className="warning-login-signup">Chưa điền tên !</span>}
                  </label>
                  <input
                    onChange={(e)=>{
                      setFirstName(e.target.value)
                      setCheckFirstName(false)
                    }}
                    name="lastName"
                    type="text"
                    placeholder="Nhập tên"
                    required
                  />
                </div>
              </div>
          </div>
  
            <div className="signup-form-category">
              <label>
                Số điện thoại: <span>*</span>
              {checkPhoneNumber && <span className="warning-login-signup">Ít nhất 10 số !</span>}
              </label>
              <input
                onChange={(e)=>{
                  setPhoneNumber(e.target.value)
                  setCheckPhoneNumber(false)
                }}
                name="phoneNumber"
                type="number"
                placeholder="Nhập số"
                required
              />
            </div>

            <div className="signup-form-category">
              <label>
                Địa chỉ: <span>*</span>
                {checkAddress&& <span className="warning-login-signup">Chưa điền địa chỉ !</span>}
              </label>
              <input
                onChange={(e)=>{
                  setAddress(e.target.value)
                  setCheckAddress(false)
                }}
                name="address"
                type="text"
                placeholder="Nhập địa chỉ"
                required
              />
            </div>
  
            <div className="signup-form-category">
                <label>
                    Email: <span>*</span>
                    {CheckEmail && <span className="warning-login-signup">Chưa điền email !</span>}
                    {checkValidEmail && <span className="warning-login-signup">Email không hợp lệ !</span>}
                </label>
                <input
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        setCheckEmail(false)
                        setCheckValidEmail(false)
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
                    {checkPassword && <span className="warning-login-signup">Ít nhất 8 ký tự !</span>}
                </label>
                <div className="input-password">
                    <input
                        onChange={(e)=>{
                            setPassword(e.target.value)
                            setCheckPassword(false)
                        }}
                        name="password"
                        type="password"
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
            <button className="btn-reg"
              onClick={()=>{
                if(handleCheck()) {
                    dispatch(postSignup({email, password, address, firstName, lastName, phoneNumber}));
                    dispatch(toggleSignup());
                } 
              }}
            >
              Đăng ký
            </button>
          </div>
        </div>
    )
}

export default SignupModal;
