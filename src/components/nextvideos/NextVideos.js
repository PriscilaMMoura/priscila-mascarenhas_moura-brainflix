import { Link } from "react-router-dom";
// import { useEffect } from "react";
import "./NextVideos.scss";

export default function NextVideos({
  image,
  title,
  channel,
  onVideoChange,
  id,
}) {
  // const params = useParams();

  //I fixed it, but I don't fully understand it.
  // useEffect(() => {
  //   if (params.videoId) {
  //     onVideoChange(params.videoId);
  //   }
  // }, [onVideoChange, params]);

  return (
    <div
      className="next-videos-items"
      // onClick={(event) => onVideoClick(event, id)}
    >
      <div className="next-videos-items__image-container">
        {/* 
        //QUESTION: 
        //If I dont put a / in front of videos, I get the URL twice. Why?
        */}
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
