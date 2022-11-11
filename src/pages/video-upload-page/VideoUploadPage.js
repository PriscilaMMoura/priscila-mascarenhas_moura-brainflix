import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";

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
        <h1 className="upload-form__page-header">Upload Video</h1>
        <form className="upload-form">
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
            {/* After form submission, it should notify about “upload” */}

            <button
              name="upLoadButton"
              onClick={handleSubmit}
              className="upload-form__publish-button"
              type="button"
            >
              <img className="upload-form__publish-icon" src="" alt="" />
              <span className="upload-form__text--publish-button">PUBLISH</span>
            </button>

            <button
              className="upload-form__cancel-button"
              type="button"
              name="cancelButton"
              onClick={handleSubmit}
            >
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
