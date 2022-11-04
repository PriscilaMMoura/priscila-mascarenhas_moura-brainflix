export default function VideoDetails({ videoDetails }) {
  const title = videoDetails.title;
  const channel = videoDetails.channel;
  //format timestamp
  const timestamp = videoDetails.timestamp;
  const views = videoDetails.views;
  const likes = videoDetails.likes;
  const description = videoDetails.description;
  console.log(videoDetails);
  return (
    <>
      <div className="video-details">
        <h1>{title}</h1>
        <div>
          <span>By {channel}</span>
          <span>{timestamp}</span>
        </div>
        <div>
          <span>{views}</span>
          <span>{likes}</span>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}
