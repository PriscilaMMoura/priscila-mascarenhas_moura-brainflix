import "./NextVideos.scss";

export default function NextVideos({
  image,
  title,
  channel,
  onVideoClick,
  id,
}) {
  return (
    <div
      className="next-videos-items"
      onClick={(event) => onVideoClick(event, id)}
    >
      <div className="next-videos-items__image-container">
        <img className="next-videos-items__image" alt="" src={image} />
      </div>

      <div className="next-videos-items__text-container">
        <span className="next-videos-items__body-copy next-videos-items__body-copy--title">
          {title}
        </span>
        <span className="next-videos-items__body-copy">{channel}</span>
      </div>
    </div>
  );
}
