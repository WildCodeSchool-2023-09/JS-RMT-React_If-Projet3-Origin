import React from "react";
import PropTypes from "prop-types";

function PageVideo({ video }) {
  return (
    <article className="containt">
      {" "}
      <h1> {video.title}</h1>
      <h1>{video.year}</h1>
      <h1>{video.url}'</h1>
    </article>
  );
}

PageVideo.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default PageVideo;
