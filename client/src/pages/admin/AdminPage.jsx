import { createContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CollectionTimeItem from '../../components/CollectionTimeItem';
import NavbarAdmin from '../../components/NavbarAdmin';
import AdminStatistical from './adminPage/AdminStatistical';
import AdminShowtimes from './adminPage/AdminShowtimes';
import AdminFilms from './adminPage/AdminFilms';
import TypeofMovie from '../../components/TypeofMovie';
import InputAddTypeof from './components/InputAddTypeof';
import AdminCenimas from './adminPage/AdminCenimas';
import InputAddCinemas from './components/InputAddCinemas';
import AdminCenimaRooms from './adminPage/AdminCenimaRooms';
import InputAddCinemaRooms from './components/InputAddCinemaRooms';
import { Route, Routes } from 'react-router-dom';
import AdminTypeof from './adminPage/AdminTypeof';
import AdminTickets from './adminPage/AdminTickets';
import AdminTicketDetail from './components/AdminTicketDetail';
import AdminUsers from './adminPage/AdminUsers';
import AdminCalenderReleases from './adminPage/AdminCalenderReleases';


export const adminContext = createContext();

const AdminPage = () => {
    const isAdmin = true;

    return(
        <adminContext.Provider value={isAdmin}>
            <Container>
                <NavbarAdmin/>
                <Routes>
                    <Route path="/" element={<AdminStatistical/>}/>
                    <Route path="/adminFilms" element={<AdminFilms/>}/>
                    <Route path="/adminTypeof" element={<AdminTypeof/>}/>
                    <Route path="/adminShowtimes" element={<AdminShowtimes/>}/>
                    <Route path="/adminCalenderReleases" element={<AdminCalenderReleases/>}/>
                    <Route path="/adminCinemas" element={<AdminCenimas/>}/>
                    <Route path="/adminCinemaRooms" element={<AdminCenimaRooms/>}/>
                    <Route path="/adminTickets" element={<AdminTickets/>}/>
                    <Route path="/adminTicketDetail" element={<AdminTicketDetail/>}/>
                    <Route path="/adminUsers" element={<AdminUsers/>}/>
                </Routes>
            </Container>
        </adminContext.Provider>
    )
}

export default AdminPage;