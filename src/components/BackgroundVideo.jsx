// import styles from "./BackgroundVideo.module.css";

// function BackgroundVideo({ section, name, videoRef }) {
//   const ifPlay = section.background.play;
//   const source = section.background.src;
//   return (
//     <div className={name}>
//       <video ref={videoRef} autoPlay={ifPlay} muted loop>
//         <source src={source} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default BackgroundVideo;

import styles from "./BackgroundVideo.module.css";

function BackgroundVideo({ section, name, videoRef }) {
  const ifPlay = section.background.play;
  const source = section.background.src;
  return (
    <div className={`${styles["video-container"]} ${name}`}>
      <video ref={videoRef} autoPlay={ifPlay} muted loop>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
