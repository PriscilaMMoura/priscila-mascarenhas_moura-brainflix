import "./header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header({ homePageVideoId, onMainPathChange }) {
  // const params = useParams();
  console.log("Hello World");
  //I fixed it, but I don't fully understand it.
  // useEffect(() => {
  //   if (params.videoId) {
  //     onMainPathChange(params.videoId);
  //   }
  //   console.log(params);
  //   console.log(params.videoId);
  //   // console.log(typeof params.videoId);
  // }, [onMainPathChange, params]);
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo-container">
        <Link to={"/"}>
          {/* <Link to={`/videos/${homePageVideoId}`}> */}
          <img className="nav-bar__logo" src={logo} alt="BrainFlix logo" />
        </Link>
        {/* </Link> */}
      </div>
      <div className="nav-bar__search-container">
        <div className="nav-bar__search-avatar-wrap">
          <form className="nav-bar__input-wrapper">
            <img className="nav-bar__search-icon" src={searchIcon} alt="" />

            <input
              className="nav-bar__input"
              type="text"
              placeholder="Search"
            />
          </form>

          <div className="nav-bar__avatar-container nav-bar__avatar-container--small">
            <img
              className="nav-bar__avatar"
              src={avatarImage}
              alt="user avatar"
            />
          </div>
        </div>
        <Link to={`/upload`}>
          <button className="nav-bar__button">
            <img className="nav-bar__upload-icon" src={uploadIcon} alt="" />
            <span className="nav-bar__button-text">UPLOAD</span>
          </button>
        </Link>
        <div className="nav-bar__avatar-container nav-bar__avatar-container--medium">
          <img
            className="nav-bar__avatar"
            src={avatarImage}
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  );
}
