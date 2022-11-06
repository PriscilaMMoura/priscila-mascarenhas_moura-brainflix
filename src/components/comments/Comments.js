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
      <div class="comments__avatar-container comments__avatar"></div>
      <div class="comments__text-container">
        <div class="comments__name-date-container">
          <span class="comments__copy-body-text comments__copy-body-text--user-name">
            {name}
          </span>
          <span class="comments__copy-body-text comments__copy-body-text--date">
            {date}
          </span>
        </div>
        <span class="comments__copy-body-text">{comment}</span>
      </div>
    </div>
  );
}
