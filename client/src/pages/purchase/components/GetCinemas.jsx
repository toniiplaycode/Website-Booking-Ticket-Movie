import axios from "axios";
import { useEffect, useState } from "react";
import GetRoomCinemas from "./GetRoomCinemas";
import { useSelector } from "react-redux";

const GetCinemas = () => {
  const listAllCinema = useSelector((state) => state.apiCinema.listAllCinema);
  return (
    <>
      <div className="admin-table-container">
        {listAllCinema &&
          listAllCinema.map((item, index) => (
            <div
              className="admin-table-parent admin-table-parent-use-client"
              key={index}
            >
              <div className="admin-table-item admin-table-use-client">
                {item.nameCinema}
              </div>
              <div className="admin-table-item admin-table-use-client">
                {item.address}
              </div>
              <div className="admin-table-item admin-table-use-client room-flex-more">
                <GetRoomCinemas cinemaId={item.id} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GetCinemas;
