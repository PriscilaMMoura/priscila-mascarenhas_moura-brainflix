import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";

export default function VideoUploadPage({ onFormSubmit }) {
  return (
    <>
      <section className="upload-container">
        <h1 className="upload-form__page-header">Upload Video</h1>
        <form className="upload-form" onSubmit={(event) => onFormSubmit(event)}>
          <div className="upload-form__thumbnail-area">
            <label className="upload-form__label-text" htmlFor=""></label>
            {/* Give image container a background color of mercury */}
            <div className="upload-form__image-container">
              <img
                className="upload-form__image"
                src=""
                alt="top view of a blue bike"
              />
            </div>
          </div>

          <div>
            <div className="upload-form__input-area">
              <label className="upload-form__label-text" htmlFor="">
                TITLE YOUR VIDEO
              </label>
              <input className="upload-form__title-input" type="text" />
            </div>

            <div className="upload-form__input-area">
              <label className="upload-form__label-text" htmlFor="">
                ADD A VIDEO DESCRIPTION
              </label>
              <input className="upload-form__title-input" type="text" />
            </div>
          </div>
          <div className="upload-form__buttons-area">
            <Link className="upload-form__button-link" to={"/"}>
              <button className="upload-form__publish-button" type="submit">
                <img className="upload-form__publish-icon" src="" alt="" />
                <span className="upload-form__text--publish-button">
                  PUBLISH
                </span>
              </button>
            </Link>

            <div className="upload-form__button-container">
              <button className="upload-form__cancel-button" type="submit">
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
