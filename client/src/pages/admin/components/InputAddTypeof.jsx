import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTypeof, updateTypeof } from "../../../reducers/apiAdminTypeof";

const InputAddTypeof = ({ nameTypeFilmEdit, descTypeFilmEdit }) => {
  const dispatch = useDispatch();
  const [typeOf, setTypeOf] = useState("");
  const [checkTypeOf, setCheckTypeOf] = useState("");
  const [description, setDescription] = useState("");
  const [checkDescription, setCheckDescription] = useState("");

  useEffect(() => {
    setTypeOf(nameTypeFilmEdit);
    setDescription(descTypeFilmEdit);
  }, [nameTypeFilmEdit, descTypeFilmEdit]);

  const handleSubmit = () => {
    let check = true;
    if (typeOf == undefined || typeOf.trim().length == 0) {
      setCheckTypeOf("Vui lòng nhập thể loại !");
      check = false;
    }
    if (description == undefined || description.trim().length == 0) {
      setCheckDescription("Vui lòng nhập mô tả !");
      check = false;
    }

    const obj = {
      nameTypeFilm: typeOf,
      descriptionType: description,
    };

    if (check) {
      dispatch(postTypeof(obj));
      setTypeOf("");
      setDescription("");
    }
  };

  return (
    <div className="add-input-container">
      <input
        value={typeOf}
        onChange={(e) => {
          setTypeOf(e.target.value);
          setCheckTypeOf("");
        }}
        placeholder="Thêm thể loại phim"
      />
      {checkTypeOf && <p className="error-admin-film">{checkTypeOf}</p>}
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setCheckDescription("");
        }}
        placeholder="Thêm mô tả"
      />
      {checkDescription && (
        <p className="error-admin-film">{checkDescription}</p>
      )}
      {nameTypeFilmEdit && descTypeFilmEdit && typeOf && description ? (
        <>
          <button
            className="btn-admin"
            onClick={() => {
              dispatch(
                updateTypeof({
                  nameTypeFilm: typeOf,
                  descriptionType: description,
                })
              );
              setTypeOf("");
              setDescription("");
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
              handleSubmit();
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
