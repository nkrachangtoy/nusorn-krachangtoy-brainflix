import React from "react";
import likeIcon from "../assets/Icons/SVG/Icon-likes.svg";
import viewIcon from "../assets/Icons/SVG/Icon-views.svg";
import ListComments from "./Comment";
import ListSideVideo from "./SideVideo";

export default function MainContent({
  commentData,
  mainVideo,
  sideVideo,
  count,
}) {
  return (
    <main>
      <section className="video-info">
        <span className="video-info__title">{mainVideo[0].title}</span>
        <div className="video-primary-info">
          <span className="video-primary-info__creator">
            By {mainVideo[0].channel}
          </span>
          <span className="video-primary-info__upload-date">
            {mainVideo[0].timestamp}
          </span>
          <span className="video-primary-info__view-count">
            <img
              src={viewIcon}
              alt="View Icon"
              className="video-primary-info__view-count--icon"
            />
            {mainVideo[0].views}
          </span>
          <span className="video-primary-info__like-count">
            <img
              src={likeIcon}
              alt="Like Icon"
              className="video-primary-info__like-count--icon"
            />
            {mainVideo[0].likes}
          </span>
        </div>
        <div className="video-secondary-info">
          <p className="video-secondary-info__text">
            {mainVideo[0].description}
          </p>
        </div>
      </section>
      <section className="comments">
        <span className="comments__count">{count} Comments</span>
        <div className="comments-form">
          <div className="comments-form__profile-icon"></div>
          <div className="comments-form__comment-box--wrapper">
            <form>
              <label
                htmlFor="addComment"
                className="comments-form__comment-box--label"
              >
                JOIN THE CONVERSATION
              </label>
              <input
                type="text"
                name="addComment"
                className="comments-form__comment-box"
                placeholder="Write comment here"
              />
            </form>
            <button
              type="submit"
              id="commentCount"
              // onSubmit={handleClick}
              className="comments-form__btn"
            >
              COMMENT
            </button>
          </div>
        </div>
        {commentData.map((defaultComment) => (
          <ListComments
            key={defaultComment.id}
            id={defaultComment.id}
            name={defaultComment.name}
            timestamp={defaultComment.timestamp}
            comment={defaultComment.comment}
          />
        ))}
      </section>
      <section className="related">
        <span className="related__title">NEXT VIDEO</span>
        {sideVideo.map((video) => (
          <ListSideVideo
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            path={video.path}
          />
        ))}
      </section>
    </main>
  );
}
