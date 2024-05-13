import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTypeof, updateTypeof } from "../../../reducers/apiAdminTypeof";
import { toast } from "react-toastify";

const InputAddTypeof = ({
  nameTypeFilmEdit,
  descTypeFilmEdit,
  setNameTypeFilmEdit,
  setDescTypeFilmEdit,
}) => {
  const dispatch = useDispatch();
  const [typeOf, setTypeOf] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTypeOf(nameTypeFilmEdit);
    setDescription(descTypeFilmEdit);
  }, [nameTypeFilmEdit, descTypeFilmEdit]);

  const handleAdd = () => {
    if (!typeOf || !description) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    const obj = {
      nameTypeFilm: typeOf,
      descriptionType: description,
    };

    dispatch(postTypeof(obj));
    setTypeOf("");
    setDescription("");
  };

  const handleUpdate = () => {
    if (!typeOf || !description) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    const obj = {
      nameTypeFilm: typeOf,
      descriptionType: description,
    };

    dispatch(updateTypeof(obj));
    setNameTypeFilmEdit(undefined);
    setDescTypeFilmEdit(undefined);
    setTypeOf("");
    setDescription("");
  };

  return (
    <div className="add-input-container">
      {nameTypeFilmEdit && descTypeFilmEdit ? (
        <div className="add-input-edit">Thể loại: {nameTypeFilmEdit}</div>
      ) : (
        <>
          <input
            value={typeOf}
            onChange={(e) => {
              setTypeOf(e.target.value);
            }}
            placeholder="Thêm thể loại phim"
          />
        </>
      )}
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Thêm mô tả"
      />
      {nameTypeFilmEdit && descTypeFilmEdit ? (
        <>
          <button
            className="btn-admin"
            onClick={() => {
              handleUpdate();
            }}
          >
            Sửa thể loại
          </button>
        </>
      ) : (
        <>
          <button
            className="btn-admin"
            onClick={() => {
              handleAdd();
            }}
          >
            Thêm thể loại
          </button>
        </>
      )}
    </div>
  );
};

export default InputAddTypeof;
