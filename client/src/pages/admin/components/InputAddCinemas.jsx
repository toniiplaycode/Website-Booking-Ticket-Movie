import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postAddCinema, updateCinema } from "../../../reducers/apiCinema";

const InputAddCinemas = ({
  idEdit,
  nameCinemaEdit,
  addressEdit,
  setNameCinemaEdit,
  setAddressEdit,
}) => {
  const dispatch = useDispatch();
  const [cinemaId, setCinemaId] = useState("");
  const [cinemaName, setCinemaName] = useState("");
  const [cinemaAddress, setCinemaAddress] = useState("");
  const statusPostAddCinema = useSelector(
    (state) => state.apiCinema.statusPostAddCinema
  );
  const statusPutUpdateCinema = useSelector(
    (state) => state.apiCinema.statusPutUpdateCinema
  );

  useEffect(() => {
    setCinemaName(nameCinemaEdit);
    setCinemaAddress(addressEdit);
  }, [nameCinemaEdit, addressEdit]);

  const handleAddCinema = () => {
    if (!cinemaId || !cinemaName || !cinemaAddress) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    dispatch(
      postAddCinema({
        id: cinemaId,
        nameCinema: cinemaName,
        address: cinemaAddress,
      })
    );
  };

  useEffect(() => {
    if (statusPostAddCinema == "succeeded") {
      setCinemaId("");
      setCinemaName("");
      setCinemaAddress("");
      setNameCinemaEdit(undefined);
      setAddressEdit(undefined);
    }
  }, [statusPostAddCinema]);

  const handleUpdateCinema = () => {
    if (!cinemaName || !cinemaAddress) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    dispatch(
      updateCinema({
        id: idEdit,
        nameCinema: cinemaName,
        address: cinemaAddress,
      })
    );
  };

  useEffect(() => {
    if (statusPutUpdateCinema == "succeeded") {
      setNameCinemaEdit(undefined);
      setAddressEdit(undefined);
      setCinemaId("");
      setCinemaName("");
      setCinemaAddress("");
    }
  }, [statusPutUpdateCinema]);

  return (
    <div className="add-input-container">
      {nameCinemaEdit == undefined && addressEdit == undefined ? (
        <input
          placeholder="Mã rạp"
          value={cinemaId}
          onChange={(e) => setCinemaId(e.target.value)}
        />
      ) : (
        <div className="add-input-edit">Mã rạp: {idEdit}</div>
      )}
      <input
        placeholder="Tên rạp"
        value={cinemaName}
        onChange={(e) => setCinemaName(e.target.value)}
      />
      <input
        placeholder="Địa chỉ rạp"
        value={cinemaAddress}
        onChange={(e) => setCinemaAddress(e.target.value)}
      />

      {nameCinemaEdit && addressEdit ? (
        <button className="btn-admin" onClick={handleUpdateCinema}>
          Sửa rạp
        </button>
      ) : (
        <button className="btn-admin" onClick={handleAddCinema}>
          Thêm rạp
        </button>
      )}
    </div>
  );
};

export default InputAddCinemas;
