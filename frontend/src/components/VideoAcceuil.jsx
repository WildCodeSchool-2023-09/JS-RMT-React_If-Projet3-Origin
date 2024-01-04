import PropTypes from "prop-types";
import "../App.css";

function VideoAcceuil({ video }) {
  return (
    <>
      <h2>{video.title}</h2>
      <h3>video</h3>
      <h3>video</h3>
    </>
  );
}

VideoAcceuil.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default VideoAcceuil;
