import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import LocationSelect from "../../components/LocationSelect";
import CollectionTime from "../../components/CollectionTime";
import PurchaseFilmCard from "./components/PurchaseFilmCard";
import SeatSelect from "./components/SeatSelect";
import TicketBill from "./components/TicketBill";
import SelectPayment from "./components/SelectPayment";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { useEffect, useState } from "react";
import { searchHandle } from "../../reducers/searchFilm";
import { fetchCrWithFilm } from "../../reducers/apiCrWithFilm";
import axios from "axios";
import GetCinemas from "./components/GetCinemas";

const PurchasePage = () => {
    // window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [payments, setPayments] = useState();
    const [selectedPayment, setSelectedPayment] = useState();
    let films = useSelector((state) => state.films.films.all);
    const status = useSelector((state) => state.films.status);
    
    let selectedFilm = useSelector((state) => state.selectedPurchaseFilm.selectedFilm);
    const search = useSelector((state) => state.searchFilm.search);

    // Lọc danh sách phim dựa trên search
    useEffect(() => {
        if (films) {
            const filtered = films.filter(item => {
                if (search === '') {
                    return true;
                }
                return !search || item.nameFilm.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredFilms(filtered);
        }
    }, [films, search]);

    // thời gian chiếu phim chiếu từng phim được chọn
    const [grouped, setGrouped] = useState({});

    const crWithFilm = useSelector((state) => state.apiCrWithFilm.CrWithFilm);
    const statusCrWithFilm = useSelector((state) => state.apiCrWithFilm.status);
    
    useEffect(() => {
        dispatch(fetchCrWithFilm(selectedFilm.id));
    }, [selectedFilm]);
    

    // gôm nhóm các giờ chiếu cho các phòng chiếu
    const getNameCinemaRoom = async (idCinemaRoom) => {
        const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getDetail?id=${idCinemaRoom}`);
        return res.data.data.nameCinemaRoom;
    }

    useEffect(() => {
        if(crWithFilm.length > 0) {
            const groupByCinemaRoomId = async (array) => {
                let grouped = {};
                // Sử dụng Promise.all để chờ cho tất cả các cuộc gọi API hoàn thành
                await Promise.all(array.map(async (item) => {
                    const detail = await getNameCinemaRoom(item.cinemaRoomId);
                    const key = `Phòng ${detail} ${item.dateWatch}`;
                    if (!grouped[key]) {
                        grouped[key] = [];
                    }
                    grouped[key].push(item);
                }));
                setGrouped(grouped);
            }
            groupByCinemaRoomId(crWithFilm);
        } else {
            setGrouped({});
        }
    }, [crWithFilm]);

    // lấy các phương thức thanh toán
    useEffect(() => {
      const getPayments = async () => {
        try {
          const res = await axios.get("http://localhost:8000/api/paymentMethod/getAll");
          setPayments(res.data.all);
        } catch (error) {
          console.error("Error fetching payments data:", error);
        }
      }
      getPayments();
    }, []);
    
    const selectedCrWithFilm = useSelector((state) => state.selectedCrWithFilm.selectedCrWithFilm);
    // console.log(selectedCrWithFilm);

    return(
        <Container>
            <Row>
                <Col lg={8}>
                    <p className="purchase-select-film-title">Các rạp và phòng chiếu</p>
                    <GetCinemas/>
                    <p className="purchase-select-film-title">Chọn phim</p>
                    <div className='search-movies-container'>
                        <input
                            placeholder='Phim bạn muốn tìm...' 
                            value={search}
                            onChange={(e)=>{
                                dispatch(searchHandle(e.target.value));
                            }}
                            />
                    </div>
                    <div className="purchase-select-film">
                        {status == "loading" && (
                            <Loading/>
                        )}
                        {status == "succeeded" && filteredFilms.map((item, index) => 
                            <PurchaseFilmCard key={index} item={item}/>
                        )
                    }
                        {(filteredFilms.length == 0 && status == "succeeded" ) && (
                            <div className='warning-search'>
                                Không có phim nào !
                            </div>
                        )}
                    </div>
                    <CollectionTime filmDetail={selectedFilm} grouped={grouped} statusCrWithFilm={statusCrWithFilm}/>
                    <p className="purchase-select-film-title">Chọn ghế</p>
                    <SeatSelect/>
                    <p className="purchase-select-film-title">Chọn phương thức thanh toán</p>
                    <SelectPayment payments={payments} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
                </Col>
                <Col lg={4}>
                    <TicketBill selectedPayment={selectedPayment}/>
                </Col>
            </Row>
        </Container>
    )
}

export default PurchasePage;