import "./Comments.scss";

export default function Comments({ name, timestamp, comment }) {
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const date = formatDate(new Date(timestamp));
  return (
    <div className="comments">
      <div className="comments__avatar-container comments__avatar"></div>
      <div className="comments__text-container">
        <div className="comments__name-date-container">
          <span className="comments__copy-body-text comments__copy-body-text--user-name">
            {name}
          </span>
          <span className="comments__copy-body-text comments__copy-body-text--date">
            {date}
          </span>
        </div>
        <span className="comments__copy-body-text">{comment}</span>
      </div>
    </div>
  );
}
