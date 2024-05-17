import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCommentEachFilm,
  postComment,
} from "../../../reducers/apiComment";
import Loading from "../../../components/Loading";
import { toggleSignin } from "../../../reducers/modalSigninSignup";
import { toast } from "react-toastify";
import CommentItem from "../../../components/CommentItem";

const Comments = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let searchParams = new URLSearchParams(location.search);
  let id = searchParams.get("id");

  let listAllCommentEachFilm = useSelector(
    (state) => state.apiComment.listAllCommentEachFilm
  );
  const statusFetchAllCommentEachFilm = useSelector(
    (state) => state.apiComment.statusFetchAllCommentEachFilm
  );
  const statusPostComment = useSelector(
    (state) => state.apiComment.statusPostComment
  );
  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  useEffect(() => {
    dispatch(fetchAllCommentEachFilm(id));
  }, [id, statusPostComment]);

  const [visibleComments, setVisibleComments] = useState(5);
  const [comment, setCommets] = useState("");
  const [sortedListComment, setSortedListComment] = useState([]);

  const handleShowMoreComments = () => {
    setVisibleComments((prev) => prev + 5); // Increase by 5 or another number as needed
  };

  const handleAddComment = () => {
    if (Object.keys(inforUser).length == 0) {
      dispatch(toggleSignin());
      return;
    }

    if (comment.length == 0) {
      toast.warning("Chưa điền bình luận");
      return;
    }

    const obj = {
      userId: inforUser.id,
      filmId: id,
      content: comment,
    };
    dispatch(postComment(obj));
    setCommets("");
  };

  useEffect(() => {
    if (listAllCommentEachFilm) {
      const sortedList = (listAllCommentEachFilm = [
        ...listAllCommentEachFilm,
      ].sort((a, b) => {
        return b.id - a.id;
      }));
      setSortedListComment(sortedList);
    } else {
      setSortedListComment([]);
    }
  }, [listAllCommentEachFilm]);

  return (
    <Container>
      <Row>
        <Col>
          <div className="cmt-item-title">Bình luận từ người xem</div>
          {statusFetchAllCommentEachFilm === "loading" && <Loading />}
          {statusFetchAllCommentEachFilm === "succeeded" &&
          sortedListComment.length > 0 ? (
            sortedListComment
              .slice(0, visibleComments)
              .map((item, index) => (
                <CommentItem
                  item={item}
                  inforUser={inforUser}
                  filmId={id}
                  key={index}
                />
              ))
          ) : (
            <div className="warning-search comment-detail">
              Chưa có bình luận nào !
            </div>
          )}

          {visibleComments < listAllCommentEachFilm.length && (
            <div className="cmt-item-more">
              <button onClick={handleShowMoreComments}>
                Xem thêm bình luận
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="cmt-item-more-icon"
                />
              </button>
            </div>
          )}
          <div className="add-input-container">
            <textarea
              placeholder="Nêu cảm nhận phim của bạn..."
              value={comment}
              onChange={(e) => {
                setCommets(e.target.value);
              }}
            />
          </div>
          <div className="cmt-item-add-container">
            <button
              className="cmt-item-add-btn"
              onClick={() => {
                handleAddComment();
              }}
            >
              Bình luận
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Comments;
