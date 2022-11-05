import "./Hero.scss";

export default function Hero({ videoDetails }) {
  const heroVideo = videoDetails.image;
  console.log(videoDetails.duration);

  //add video duration to image
  // const duration = videoDetails.duration;
  return (
    <>
      {/* figure out how to use video tag */}
      <div className="hero">
        <video
          className="hero__video"
          src=""
          poster={heroVideo}
          controls
        ></video>
      </div>
    </>
  );
}
