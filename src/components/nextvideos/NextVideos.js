import { Link } from "react-router-dom";
import "./NextVideos.scss";

export default function NextVideos({ image, title, channel, id }) {
  return (
    <div className="next-videos-items">
      <div className="next-videos-items__image-container">
        <Link to={`/videos/${id}`}>
          <img className="next-videos-items__image" alt="" src={image} />
        </Link>
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
