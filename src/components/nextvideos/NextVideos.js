import "./NextVideos.scss";

export default function NextVideos({
  image,
  title,
  channel,
  onVideoClick,
  id,
}) {
  console.log(onVideoClick);
  return (
    <>
      <div
        className="next-videos__items-container"
        onClick={(event) => onVideoClick(event, id)}
      >
        <div className="next-videos__image-container">
          <img className="next-videos__image" src={image} alt="" />
        </div>
        <div className="next-videos__text-container">
          <span>{title}</span>
          <span>{channel}</span>
        </div>
      </div>
    </>
  );
}
