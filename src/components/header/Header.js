import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo-container">
        <img className="nav-bar__logo" src={logo} alt="BrainFlix logo" />
      </div>
      <div className="nav-bar__search-container">
        <div className="nav-bar__search-avatar-wrap">
          <div className="nav-bar__input-wrapper">
            <img className="nav-bar__search-icon" src={searchIcon} alt="" />

            <input
              className="nav-bar__input"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="nav-bar__avatar-container nav-bar__avatar-container--small">
            <img
              className="nav-bar__avatar"
              src={avatarImage}
              alt="user avatar"
            />
          </div>
        </div>
        <button className="nav-bar__button">
          <img className="nav-bar__upload-icon" src={uploadIcon} alt="" />
          <span className="nav-bar__button-text">UPLOAD</span>
        </button>
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
