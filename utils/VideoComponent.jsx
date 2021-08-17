import { videoAssetFor } from './videoUrl'

const VideoComponent = ({ mp4, alt }) => {
  return (
    <figure
      style={{
        margin: "0",
        paddingBottom: "1rem",
        paddingRight: "2rem"
      }}
    >
      <video
        title={alt}
        height="auto"
        width="100%"
        poster="https://williamatherton.com/wp-content/uploads/2021/07/day_of_the_locust.jpg"
        preload="auto"
        controls
      >
        <source src={videoAssetFor(mp4).url} type="video/mp4" />
      </video>
    </figure>
  );
};

export default VideoComponent;
