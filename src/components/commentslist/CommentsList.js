import Comments from "../comments/Comments";

export default function commentsList({ commentsList }) {
  console.log(commentsList);
  return (
    <>
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
