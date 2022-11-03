import "./Hero.scss";

export default function Hero({ videoDetails }) {
  const heroVideo = videoDetails.image;

  //add video duration to image
  // const duration = videoDetails.duration;
  return (
    <>
      {/* figure out how to use video tag */}
      <video src="" poster={heroVideo}></video>
    </>
  );
}
