import Hero from "../../components/hero/Hero";
import VideoDetails from "../../components/videodetails/VideoDetails";
import CommentsList from "../../components/commentslist/CommentsList";
import NextVideosList from "../../components/nextvideoslist/NextVideosList";
import "./MainVideoPage.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MainVideoPage({ onMainContentSubmit }) {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const videosURL = "http://localhost:8080/videos";
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const videoId = params.videoId;
    axios
      .get(videosURL)
      .then((response) => {
        let videos = null;
        params.videoId
          ? (videos = response.data.filter((video) => video.id !== videoId))
          : (videos = response.data.filter(
              (video) => video.id !== defaultVideoId
            ));
        setVideos(videos);
      })
      .catch((error) => console.log(error));
  }, [params.videoId]);

  useEffect(() => {
    let videoId = null;
    params.videoId ? (videoId = params.videoId) : (videoId = defaultVideoId);
    const videoDetailsURL = `http://localhost:8080/videos/${videoId}`;
    axios
      .get(videoDetailsURL)
      .then((response) => {
        if (response.data.id === videoId) {
          const videoDetails = response.data;
          setVideoDetails(videoDetails);
        }
      })
      .catch((error) => console.log(error));
  }, [params.videoId]);

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
          <NextVideosList videos={videos} />
        </section>
      </div>
    </>
  );
}
