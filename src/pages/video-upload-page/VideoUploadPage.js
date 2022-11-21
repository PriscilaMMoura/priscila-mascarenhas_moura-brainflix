import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function VideoUploadPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("default");
  const [description, setDescription] = useState("default");

  const isTitleValid = () => {
    if (title === "") {
      return false;
    }
    return true;
  };

  const isDescriptionValid = () => {
    if (description === "") {
      return false;
    }
    return true;
  };

  const uploadToApi = (newVideoDetails) => {
    axios
      .post("http://localhost:8080/videos/", newVideoDetails)
      .catch((error) => {
        console.log(error, "Post failed");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideoDetails = {
      title: event.target.title.value,
      channel: "Priscila M. Moura",
      image: "http://localhost:8080/images/image9.jpeg",
      description: event.target.description.value,
    };

    setTitle(event.target.title.value);
    setDescription(event.target.description.value);

    if (event.target.title.value && event.target.description.value) {
      uploadToApi(newVideoDetails);
      alert("Upload Completed");
      navigate("/");
      event.target.reset();
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
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
          <form className="upload-form__form" onSubmit={handleSubmit}>
            <div className="upload-form__thumbnail-input-wrap">
              <div className="upload-form__thumbnail-area">
                <label className="upload-form__label-text">
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
                  <label className="upload-form__label-text" htmlFor="title">
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    className={`upload-form__input upload-form__input--title ${
                      isTitleValid() ? "" : "upload-form__input--invalid"
                    }`}
                    placeholder="Add a title to your video"
                    cols="30"
                    rows="5"
                    type="text"
                    id="title"
                  />
                </div>

                <div className="upload-form__input-area">
                  <label
                    className="upload-form__label-text"
                    htmlFor="description"
                  >
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <textarea
                    className={`upload-form__input upload-form__input--description ${
                      isDescriptionValid() ? "" : "upload-form__input--invalid"
                    }`}
                    placeholder="Add a description to your video"
                    cols="30"
                    rows="3"
                    type="text"
                    id="description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="upload-form__buttons-area">
              <button
                name="publishButton"
                className="upload-form__buttons upload-form__buttons--publish"
                type="submit"
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
                onClick={handleClick}
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
