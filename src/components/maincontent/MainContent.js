import "./MainContent.scss";
import Hero from "../hero/Hero";
import VideoDetails from "../videodetails/VideoDetails";
import Comments from "../comments/Comments";
import NextVideos from "../nextvideos/NextVideos";

export default function MainContent() {
  return (
    <>
      <section className="hero-container">
        <Hero />
      </section>
      <section className="comments-videos-details-container">
        <div className="video-details-container">
          <VideoDetails />
        </div>
        <div className="comments-container">
          <Comments />
        </div>
      </section>
      <section className="next-videos-container">
        <NextVideos />
      </section>
    </>
  );
}
