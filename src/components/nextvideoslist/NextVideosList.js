import NextVideos from "../nextvideos/NextVideos";
import "./NextVideosList.scss";

export default function NextVideosList({ videos, onVideoListChange }) {
  return (
    <div className="next-videos-container">
      <label className="next-videos-container__label-text">NEXT VIDEOS</label>
      {videos.map((video) => {
        return (
          <NextVideos
            key={video?.title + video?.id}
            image={video?.image}
            title={video?.title}
            channel={video?.channel}
            onVideoChange={onVideoListChange}
            id={video?.id}
          />
        );
      })}
    </div>
  );
}
