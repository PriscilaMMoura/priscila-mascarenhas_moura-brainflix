import "./MainContent.scss";
import Hero from "../hero/Hero";
import VideoDetails from "../videodetails/VideoDetails";
import Comments from "../comments/Comments";
import NextVideosList from "../nextvideoslist/NextVideosList";

export default function MainContent({
  videos,
  videoDetails,
  onMainContentClick,
}) {
  return (
    <>
      <section className="hero-container">
        <Hero videoDetails={videoDetails} />
      </section>
      <section className="comments-videos-details-container">
        <VideoDetails videoDetails={videoDetails} />
        <Comments />
      </section>
      <section className="next-videos">
        <NextVideosList videos={videos} onVideoListClick={onMainContentClick} />
      </section>
    </>
  );
}
