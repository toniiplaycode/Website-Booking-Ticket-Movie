import { faEllipsis, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../utils/functionCommon";
import { useState } from "react";
import { deleteComment, putComment } from "../reducers/apiComment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CommentItem = ({ item, inforUser }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditChange, setIsEditChange] = useState(false);
  const [editContent, setEditContent] = useState(item.content);

  const handleEditSubmit = (id) => {
    console.log(id);
    if (editContent.length == 0) {
      toast.warning("Chưa điền nội dung bình luận !");
      return;
    }

    dispatch(putComment({ id, content: editContent }));
  };

  return (
    <div className="cmt-item-container">
      <div className="cmt-iem-header-container">
        <div className="cmt-iem-header">
          <div className="cmt-item-header-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            {item.firstName + " " + item.lastName} -{" "}
            {formatDate(item.createdAt)}
          </div>
        </div>
        {item.userId == inforUser.id && (
          <div className="cmt-iem-header-edit">
            {!isEdit ? (
              <FontAwesomeIcon
                icon={faEllipsis}
                fa-xs
                className="header-edit-icon"
                onClick={() => setIsEdit(true)}
              />
            ) : (
              <div className="header-edit-btn">
                <button
                  onClick={() => {
                    setIsEdit(false);
                    dispatch(
                      deleteComment({ id: item.id, filmId: item.filmId })
                    );
                  }}
                >
                  Xoá
                </button>
                <button
                  onClick={() => {
                    setIsEdit(false);
                    setIsEditChange(true);
                    setEditContent(item.content);
                  }}
                >
                  Sửa
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {!isEditChange ? (
        <div className="cmt-iem-content">{item.content}</div>
      ) : (
        <div className="add-input-container">
          <textarea
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
          <button
            className="cmt-button-edit"
            onClick={() => {
              handleEditSubmit(item.id);
            }}
          >
            Sửa
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
