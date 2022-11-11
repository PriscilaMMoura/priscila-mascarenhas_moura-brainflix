import Header from "./components/header/Header";
import MainVideoPage from "./pages/main-video-page/MainVideoPage";
import VideoUploadPage from "./pages/video-upload-page/VideoUploadPage";
import "./styles/main.scss";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//QUESTIONS:
// I cilck on a video on list, it becomes the hero, but when I refresh the page, it doesn't go away and while the page is loading, I can briefly se the defautl video.

function App() {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header-container">
          <Header homePageVideoId={defaultVideoId} />
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
                // videos={videos}
                // videoDetails={videoDetails}
                // onMainVideoChange={handleVideoChange}
                // onMainContentSubmit={handleSubmit}
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
