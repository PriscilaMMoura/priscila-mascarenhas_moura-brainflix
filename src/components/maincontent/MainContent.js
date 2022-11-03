import "./MainContent.scss";
import Hero from "../hero/Hero";
import VideoDetails from "../videodetails/VideoDetails";
import Comments from "../comments/Comments";
import NextVideosList from "../nextvideoslist/NextVideosList";
import videoDetailsData from "../../data/videoDetails.json";
import videosData from "../../data/videos.json";
import { useState } from "react";

function getVideos(videoId) {
  return videosData.filter((video) => video.id !== videoId);
}
function getVideoDetails(videoId) {
  return videoDetailsData.find((video) => video.id === videoId);
}

export default function MainContent() {
  const defaultVideoId = videosData[0].id;
  // console.log(defaultVideoId);

  const [videoId, setVideoId] = useState(defaultVideoId);
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const clickHandler = (event, videoId) => {
    event.preventDefault();

    console.log(event);
    setVideoId(videoId);
    setVideos(getVideos(videoId));
    setVideoDetails(getVideoDetails(videoId));
  };

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
        <NextVideosList videos={videos} onVideoListClick={clickHandler} />
      </section>
    </>
  );
}
