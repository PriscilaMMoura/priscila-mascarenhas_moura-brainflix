import Header from "./components/header/Header";
import MainVideoPage from "./pages/main-video-page/MainVideoPage";
import VideoUploadPage from "./pages/video-upload-page/VideoUploadPage";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
            <Route path="videos/:videoId" element={<MainVideoPage />} />
            <Route path="upload" element={<VideoUploadPage />} />
            <Route
              path="*"
              element={<Navigate to={`videos/${defaultVideoId}`} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
