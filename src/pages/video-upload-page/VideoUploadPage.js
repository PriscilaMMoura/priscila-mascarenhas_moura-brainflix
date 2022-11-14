import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

export default function VideoUploadPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.name === "upLoadButton") {
      alert("Upload Completed");
    }

    if (event.currentTarget.name === "cancelButton") {
      alert("Upload Cancelled");
    }
    navigate("/");
  };

  return (
    <>
      <section className="upload-container">
        <div className="upload-form-wrap">
          <h1 className="upload-form__page-header">Upload Video</h1>
          <form className="upload-form__form">
            <div className="upload-form__thumbnail-input-wrap">
              <div className="upload-form__thumbnail-area">
                <label className="upload-form__label-text" htmlFor="">
                  VIDEO THUMBNAIL
                </label>
                <div className="upload-form__image-container">
                  <img
                    className="upload-form__image"
                    src={thumbnail}
                    alt="top view of a blue bike"
                  />
                </div>
              </div>

              <div className="upload-form__fields">
                <div className="upload-form__input-area">
                  <label className="upload-form__label-text" htmlFor="">
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    className="upload-form__input upload-form__input--title"
                    placeholder="Add a title to your video"
                    cols="30"
                    rows="5"
                    type="text"
                  />
                </div>

                <div className="upload-form__input-area">
                  <label className="upload-form__label-text" htmlFor="">
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <textarea
                    className="upload-form__input upload-form__input--description"
                    placeholder="Add a description to your video"
                    cols="30"
                    rows="3"
                    type="text"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="upload-form__buttons-area">
              <button
                name="upLoadButton"
                onClick={handleSubmit}
                className="upload-form__buttons upload-form__buttons--publish"
                type="button"
              >
                <img
                  className="upload-form__button-icon"
                  src={publishIcon}
                  alt="publish icon: arrow pointing up with underscore on top of it"
                />
                <span className="upload-form__button-text">PUBLISH</span>
              </button>

              <button
                className="upload-form__buttons upload-form__buttons--cancel"
                type="button"
                name="cancelButton"
                onClick={handleSubmit}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
