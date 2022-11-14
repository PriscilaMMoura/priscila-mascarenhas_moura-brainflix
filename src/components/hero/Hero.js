import "./Hero.scss";

export default function Hero({ videoDetails }) {
  const heroVideo = videoDetails?.image;

  return (
    <>
      <div className="hero">
        <video className="hero__video" poster={heroVideo} controls></video>
      </div>
    </>
  );
}
