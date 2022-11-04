import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo-container">
        <img className="nav-bar__logo" src={logo} alt="BrainFlix logo" />
      </div>
      <div className="nav-bar__search-container">
        <div className="nav-bar__search-avatar-wrap">
          <input className="nav-bar__input" type="text" placeholder="Search" />
          <div className="nav-bar__avatar-container--small">
            <img
              className="nav-bar__avatar"
              src="../../assets/images/Mohan-muruge.jpg"
              alt="user avatar"
            />
          </div>
        </div>
        <button className="nav-bar__buttton">UPLOAD</button>
        <div className="nav-bar__avatar-container--medium">
          <img
            className="nav-bar__avatar"
            src="../../assets/images/Mohan-muruge.jpg"
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  );
}
