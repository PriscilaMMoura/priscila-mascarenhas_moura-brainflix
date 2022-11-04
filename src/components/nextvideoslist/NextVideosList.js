// import "./NextVideosList.scss";
import NextVideos from "../nextvideos/NextVideos";

export default function NextVideosList({ videos, onVideoListClick }) {
  // console.log(onVideoListClick);
  return (
    <>
      <label className="next-videos__label-text" htmlFor="">
        NEXT VIDEO
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
    </>
  );
}
