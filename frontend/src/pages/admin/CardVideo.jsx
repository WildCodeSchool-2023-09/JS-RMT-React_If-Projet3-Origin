import React from "react";
import PropTypes from "prop-types";

function CardVideo({ video }) {
  return (
    <article className="containt">
      {" "}
      <h1> {video.title}</h1>
      <h1>{video.year}</h1>
      <a href={video.url}>Lien vers video</a>
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
