import Header from "./components/header/Header";
import MainVideoPage from "./pages/main-video-page/MainVideoPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./styles/main.scss";
import "./pages/main-video-page/MainVideoPage.scss";
import VideoUploadPage from "./pages/video-upload-page/VideoUploadPage";

//QUESTIONS:
// I cilck on a video on list, it becomes the hero, but when I refresh the page, it doesn't go away and while the page is loading, I can briefly se the defautl video.

const videosURL =
  "https://project-2-api.herokuapp.com/videos/?api_key=871acf67-7c1d-472f-8363-53d72b240ffe";

function App() {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  const handleVideoChange = (videoId) => {
    setVideoId(videoId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get(videosURL)
      .then((response) => {
        const videos = response.data.filter((video) => video.id !== videoId);
        setVideos(videos);
      })
      .catch((error) => console.log(error));
  }, [videoId]);
  //QUESTIONS:
  //Why does it complain when I remove the dependencies.

  const videoDetailsURL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=871acf67-7c1d-472f-8363-53d72b240ffe`;
  useEffect(() => {
    axios
      .get(videoDetailsURL)
      .then((response) => {
        if (response.data.id === videoId) {
          const videoDetails = response.data;
          setVideoDetails(videoDetails);
        }
      })
      .catch((error) => console.log(error));
  }, [videoDetailsURL, videoId]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header-container">
          <Header
            homePageVideoId={defaultVideoId}
            onMainPathChange={handleVideoChange}
          />
        </header>
        <main className="main-container">
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`videos/${defaultVideoId}`} />}
            />
            <Route
              path="videos/:videoId"
              element={
                <MainVideoPage
                  videos={videos}
                  videoDetails={videoDetails}
                  onMainVideoChange={handleVideoChange}
                  onMainContentSubmit={handleSubmit}
                />
              }
            />
            <Route path="upload" element={<VideoUploadPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
