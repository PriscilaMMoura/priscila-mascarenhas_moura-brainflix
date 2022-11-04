import "./Comments.scss";

export default function Comments({ name, timestamp, comment }) {
  return (
    <>
      <div className="comments">
        <span>{name}</span>
        <span>{timestamp}</span>
        <span>{comment}</span>
      </div>
    </>
  );
}
