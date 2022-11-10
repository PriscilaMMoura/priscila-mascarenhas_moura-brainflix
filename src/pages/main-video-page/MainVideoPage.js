import Hero from "../../components/hero/Hero";
import VideoDetails from "../../components/videodetails/VideoDetails";
import CommentsList from "../../components/commentslist/CommentsList";
import NextVideosList from "../../components/nextvideoslist/NextVideosList";
import "./MainVideoPage.scss";

export default function MainVideoPage({
  videos,
  videoDetails,
  onMainVideoChange,
  onMainContentSubmit,
}) {
  return (
    <>
      <section className="hero-container">
        <Hero videoDetails={videoDetails} />
      </section>
      <div className="bottom-items-container">
        <section className="comments-videos-details-container">
          <VideoDetails videoDetails={videoDetails} />
          <CommentsList
            commentsList={videoDetails.comments}
            onFormSubmit={onMainContentSubmit}
          />
        </section>
        <section>
          <NextVideosList
            videos={videos}
            onVideoListChange={onMainVideoChange}
          />
        </section>
      </div>
    </>
  );
}
