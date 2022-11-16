import Header from "./components/header/Header";
import MainVideoPage from "./pages/main-video-page/MainVideoPage";
import VideoUploadPage from "./pages/video-upload-page/VideoUploadPage";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header-container">
          <Header />
        </header>
        <main className="main-container">
          <Routes>
            <Route path="/" element={<MainVideoPage />} />
            <Route path="videos/:videoId" element={<MainVideoPage />} />
            <Route path="upload" element={<VideoUploadPage />} />
            <Route path="*" element={<MainVideoPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
