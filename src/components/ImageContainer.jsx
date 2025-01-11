function ImageContainer({ src, caption, credit, width }) {
  return (
    <div
      style={{
        width: width || "50vw",
        position: "relative",
        padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
        zIndex: "50",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers content vertically
        justifyContent: "center", // Centers content horizontally
      }}
    >
      <img src={src} style={{ width: "100%", height: "auto" }}></img>
      <p
        style={{
          textAlign: "left",
          width: "100%",
          fontFamily: "Roboto",
          fontSize: "0.95rem",
          fontWeight: "500",
          lineHeight: "1.4rem",
        }}
      >
        {caption}

        <span style={{ fontSize: "0.88rem", color: "#C9C9C9" }}>{credit}</span>
      </p>
    </div>
  );
}

export default ImageContainer;
