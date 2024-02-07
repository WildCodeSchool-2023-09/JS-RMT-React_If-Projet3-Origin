import React from "react";
import PropTypes from "prop-types";

function CardVideo({ video }) {
  return (
    <article className="containt">
      {" "}
      <h1 className="card-title"> {video.title}</h1>
      <h1 className="card-year">{video.year}</h1>
      <a className="card-url" href={video.url}>
        Lien vers video
      </a>
    </article>
  );
}

CardVideo.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardVideo;
