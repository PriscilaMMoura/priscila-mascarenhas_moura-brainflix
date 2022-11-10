// import "./MainContent.scss";
// import Hero from "../hero/Hero";
// import VideoDetails from "../videodetails/VideoDetails";
// import CommentsList from "../commentslist/CommentsList";
// import NextVideosList from "../nextvideoslist/NextVideosList";

// export default function MainContent({
//   videos,
//   videoDetails,
//   onMainContentClick,
//   onMainContentSubmit,
// }) {
//   return (
//     <>
//       <section className="hero-container">
//         <Hero videoDetails={videoDetails} />
//       </section>
//       <div className="bottom-items-container">
//         <section className="comments-videos-details-container">
//           <VideoDetails videoDetails={videoDetails} />
//           <CommentsList
//             commentsList={videoDetails.comments}
//             onFormSubmit={onMainContentSubmit}
//           />
//         </section>
//         <section>
//           <NextVideosList
//             videos={videos}
//             onVideoListClick={onMainContentClick}
//           />
//         </section>
//       </div>
//     </>
//   );
// }
