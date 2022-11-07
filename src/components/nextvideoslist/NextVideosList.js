// import "./NextVideosList.scss";
import NextVideos from "../nextvideos/NextVideos";
import "./NextVideosList.scss";

export default function NextVideosList({ videos, onVideoListClick }) {
  // console.log(onVideoListClick);
  return (
    <div className="next-videos-container">
      <label className="next-videos-container__label-text" htmlFor="">
        NEXT VIDEOS
      </label>
      {videos.map((video) => {
        return (
          <NextVideos
            key={video.title + video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
            onVideoClick={onVideoListClick}
            id={video.id}
          />
        );
      })}
    </div>
  );
}
