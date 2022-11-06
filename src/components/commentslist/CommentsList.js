import "./CommentsList.scss";
import Comments from "../comments/Comments";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

export default function commentsList({ commentsList }) {
  const commentsCount = commentsList.length;
  return (
    <>
      <div className="comments-form">
        <span className="comments-form__comments-count">
          {commentsCount} Comments
        </span>

        <div className="comments-form__body-wrap">
          <div className="comments-form__avatar-container">
            <img
              className="comments-form__avatar"
              src={avatarImage}
              alt="user avatar"
            />
          </div>

          <form action="submit" className="comments-form__form">
            <div className="comments-form__input-container">
              <label className="comments-form__label" htmlFor="">
                JOIN THE CONVERSATION
              </label>
              <input
                className="comments-form__input"
                placeholder="Add a new comment"
              />
            </div>

            <button className="comments-form__button">
              <img
                className="comments-form__upload-icon"
                src={commentIcon}
                alt=""
              />
              <span className="comments-form__button-text">COMMENT</span>
            </button>
          </form>
        </div>
      </div>

      {commentsList.map((comment) => {
        return (
          <Comments
            key={comment.id + comment.name}
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        );
      })}
    </>
  );
}
