import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

export default function VideoDetails({ videoDetails }) {
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const date = formatDate(new Date(videoDetails?.timestamp));
  const title = videoDetails?.title;
  const channel = videoDetails?.channel;
  const views = videoDetails?.views;
  const likes = videoDetails?.likes;
  const description = videoDetails?.description;
  return (
    <>
      <div className="video-details">
        <h1 className="video-details__page-header">{title}</h1>

        <div className="video-details__body-copy-wrap">
          <div className="video-details__item-wrap">
            <span className="video-details__body-copy video-details__body-copy--channel">
              By {channel}
            </span>
            <span className="video-details__body-copy">{date}</span>
          </div>

          <div className="video-details__item-wrap">
            <div className="video-details__icons-wrap video-details__icons-wrap--views">
              <img
                className="video-details__icon"
                src={viewsIcon}
                alt="views icon: eye"
              />
              <span className="video-details__body-copy video-details__body-copy">
                {views}
              </span>
            </div>

            <div className="video-details__icons-wrap">
              <img
                className="video-details__icon"
                src={likesIcon}
                alt="likes icon: heart"
              />
              <span className="video-details__body-copy">{likes}</span>
            </div>
          </div>
        </div>
        <p className="video-details__body-copy--small">{description}</p>
      </div>
    </>
  );
}
