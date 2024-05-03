import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PurchasedTicket from './components/PurchasedTicket';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { putUpdateUser } from '../../reducers/apiUpdateUser';
import { fetchListTicketUser } from '../../reducers/apiUserTicket';

const UserPage = () => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(inforUser.id);
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState(inforUser.firstName || "");
    const [lastName, setLastName] = useState(inforUser.lastName || "");
    const [address, setAddress] = useState(inforUser.address || "");
    const [phoneNumber, setPhoneNumber] = useState(inforUser.phoneNumber || "");
    const [checkFirstName, setCheckFirstName] = useState(false);
    const [checkLastName, setCheckLastName] = useState(false);
    const [checkAddress, setCheckAddress] = useState(false);
    const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);
    
    const handleCheck = () => {
        let check = true;
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

    const [sortedListTicketEachUser, setSortedListTicketEachUser] = useState([]);
    let listTicketEachUser = useSelector((state) => state.apiUserTicket.listTicketEachUser);

    useEffect(()=>{
        if(inforUser.id != undefined) {
            const userId = inforUser.id;
            dispatch(fetchListTicketUser(userId));
        } 
    }, [inforUser, dispatch]);
    
    // sắp xếp từ lớn đến nhỏ theo id của vé của từng user
    useEffect(() => {
        if (listTicketEachUser.length > 0) {
            const sortedList = [...listTicketEachUser].sort((a, b) => b.id - a.id);
            setSortedListTicketEachUser(sortedList);
        }
    }, [listTicketEachUser, dispatch]);

    return(
        <Container>
            <Row className="userpage-container">
                {Object.keys(inforUser).length > 0 && <>
                    <Col className='infor-container'>
                        <p className="userpage-info-title">Thông tin khách hàng</p>
                        <p className="userpage-info"><span>Họ tên: </span>{inforUser.lastName + " " + inforUser.firstName}</p>
                        <p className="userpage-info"><span>Địa chỉ: </span>{inforUser.address}</p>
                        <p className="userpage-info"><span>Email: </span>{inforUser.email}</p>
                        <p className="userpage-info"><span>SĐT: </span>{inforUser.phoneNumber}</p>
                        {isEdit && <>
                            <div className="add-input-container user-input">
                                <input 
                                    value={lastName}
                                    onChange={(e)=>{
                                      setLastName(e.target.value)  
                                      setCheckLastName(false)
                                    }}
                                    placeholder='Đổi họ'
                                />
                                {checkLastName && <span className="warning-login-signup">Chưa điền họ !</span>}
                                <input 
                                    value={firstName}
                                    onChange={(e)=>{
                                      setFirstName(e.target.value)  
                                      setCheckFirstName(false)
                                    }}
                                    placeholder='Đổi tên'
                                />
                                {checkFirstName && <span className="warning-login-signup">Chưa điền tên !</span>}
                                <input 
                                    value={address}
                                    onChange={(e)=>{
                                      setAddress(e.target.value)
                                      setCheckAddress(false)
                                    }}
                                    placeholder='Đổi địa chỉ mới'
                                />
                                {checkAddress && <span className="warning-login-signup">Chưa điền địa chỉ !</span>}
                                <input 
                                    type="number"
                                    onChange={(e)=>{
                                      setPhoneNumber(e.target.value)  
                                      setCheckPhoneNumber(false)
                                    }}
                                    placeholder='Đổi số điện thoại mới'
                                    value={phoneNumber}
                                />
                                {checkPhoneNumber && <span className="warning-login-signup">Ít nhất 10 số !</span>}
                                <input 
                                    type="password"
                                    onChange={(e)=>{
                                      setPassword(e.target.value)  
                                    }}
                                    placeholder='Đổi mật khẩu mới'
                                    value={password}
                                />
                            </div>
                            <button className='btn-common'
                                onClick={() =>{
                                    if(handleCheck()) {
                                        if(password.length > 0) {
                                            dispatch(putUpdateUser({id ,firstName, lastName, address, phoneNumber, password}));
                                        } else {
                                            dispatch(putUpdateUser({id ,firstName, lastName, address, phoneNumber}));
                                        }
                                        setIsEdit(false);
                                    };
                                }}
                            >
                                Sửa thông tin
                            </button>
                        </>}
                        {!isEdit && <>
                            <button className='btn-common'
                                onClick={() =>{
                                    setIsEdit(true);
                                }}
                            >
                                Sửa thông tin
                            </button>
                        </>}
                    </Col>
                    <Col className='infor-container'>
                        <p className="userpage-info-title">Vé đã mua</p>
                        {sortedListTicketEachUser.length > 0 && sortedListTicketEachUser.map((item, index)=>{
                            return <>
                                <PurchasedTicket item={item} key={index}/>
                            </>
                        })}
                    </Col>
                </>}
            </Row>
        </Container>
    )
}
export default UserPage;