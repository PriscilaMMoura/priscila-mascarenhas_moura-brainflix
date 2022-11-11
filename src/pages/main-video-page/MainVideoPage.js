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
  const videosURL =
    "https://project-2-api.herokuapp.com/videos/?api_key=871acf67-7c1d-472f-8363-53d72b240ffe";

  // const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  // const [videoId, setVideoId] = useState(defaultVideoId);
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  // const handleVideoChange = (videoId) => {
  //   setVideoId(videoId);
  // };

  const params = useParams();

  useEffect(() => {
    const videoId = params.videoId;

    axios
      .get(videosURL)
      .then((response) => {
        const videos = response.data.filter((video) => video.id !== videoId);
        setVideos(videos);
      })
      .catch((error) => console.log(error));
  }, [params.videoId]);
  //QUESTIONS:
  //Why does it complain when I remove the dependencies.

  useEffect(() => {
    const videoId = params.videoId;
    const videoDetailsURL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=871acf67-7c1d-472f-8363-53d72b240ffe`;
    axios
      .get(videoDetailsURL)
      .then((response) => {
        //check if I really need this
        if (response.data.id === videoId) {
          const videoDetails = response.data;
          setVideoDetails(videoDetails);
        }
      })
      .catch((error) => console.log(error));
  }, [params.videoId]);
  // console.log(params);

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
            // onVideoListChange={onMainVideoChange}
          />
        </section>
      </div>
    </>
  );
}
