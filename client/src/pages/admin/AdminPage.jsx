import Container from 'react-bootstrap/Container';
import NavbarAdmin from '../../components/NavbarAdmin';
import AdminStatistical from './adminPage/AdminStatistical';
import AdminFilms from './adminPage/AdminFilms';
import AdminCenimas from './adminPage/AdminCenimas';
import AdminCenimaRooms from './adminPage/AdminCenimaRooms';
import { Route, Routes } from 'react-router-dom';
import AdminTypeof from './adminPage/AdminTypeof';
import AdminTickets from './adminPage/AdminTickets';
import AdminTicketDetail from './components/AdminTicketDetail';
import AdminUsers from './adminPage/AdminUsers';
import AdminCalenderReleases from './adminPage/AdminCalenderReleases';

const AdminPage = () => {
    return(
        <Container>
            <NavbarAdmin/>
            <Routes>
                <Route path="/" element={<AdminStatistical/>}/>
                <Route path="/statistical" element={<AdminStatistical/>}/>
                <Route path="/adminFilms" element={<AdminFilms/>}/>
                <Route path="/adminTypeof" element={<AdminTypeof/>}/>
                <Route path="/adminCalenderReleases" element={<AdminCalenderReleases/>}/>
                <Route path="/adminCinemas" element={<AdminCenimas/>}/>
                <Route path="/adminCinemaRooms" element={<AdminCenimaRooms/>}/>
                <Route path="/adminTickets" element={<AdminTickets/>}/>
                <Route path="/adminTicketDetail" element={<AdminTicketDetail/>}/>
                <Route path="/adminUsers" element={<AdminUsers/>}/>
            </Routes>
        </Container>
    )
}

export default AdminPage;