import "./CommentsList.scss";
import Comments from "../comments/Comments";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

export default function CommentsList({ commentsList }) {
  const commentsCount = commentsList?.length;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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

          <form
            className="comments-form__form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="comments-form__input-container">
              <label className="comments-form__label" htmlFor="">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className="comments-form__input comments-form__input--small"
                placeholder="Add a new comment"
                cols="30"
                rows="5"
              ></textarea>
              <input
                className="comments-form__input comments-form__input--mid"
                placeholder="Add a new comment"
              />
            </div>

            <button type="submit" className="comments-form__button">
              <img
                className="comments-form__upload-icon"
                src={commentIcon}
                alt="comment icon with plus sign in the middle"
              />
              <span className="comments-form__button-text">COMMENT</span>
            </button>
          </form>
        </div>
      </div>
      <div className="comments-list-container">
        {commentsList?.map((comment) => {
          return (
            <Comments
              key={comment?.id + comment?.name}
              name={comment?.name}
              timestamp={comment?.timestamp}
              comment={comment?.comment}
            />
          );
        })}
      </div>
    </>
  );
}
