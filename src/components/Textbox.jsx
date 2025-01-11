// function Textbox(props) {
//   const { children, xPosition, yPosition, width } = props;
//   return (
//     <div
//       style={{
//         width: width || "100%",
//         backgroundColor: "rgba(0, 0, 0, .5)",
//         // border: "solid red 1px",
//         borderRadius: "0.5rem",
//         position: "relative",
//         minWidth: "30vw",
//         marginLeft: "4rem",
//         padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
//         top: `${yPosition}vh`,
//         left: `${xPosition}vw`,
//         zIndex: "50",
//       }}
//     >
//       <p
//         style={{
//           //   width: width || "100%",
//           color: "white",
//         }}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

// export default Textbox;
// import React from "react";

function Textbox(props) {
  const { children, position = "left", yPosition, width } = props;

  const containerStyle = {
    width: "100%",
    display: "flex", // Makes the container a flex container
    justifyContent: position === "center" ? "center" : "flex-start", // Centers the textbox if position is 'center'
  };

  const textboxStyle = {
    minWidth: "30vw",
    width: width || "100%",
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderRadius: "0.5rem",
    position: "relative",
    padding: "3rem",
    top: `${yPosition}vh`,
    zIndex: "50",
    // If position is 'left', add margin to left. If 'right', push to right using margin-left: auto
    marginLeft: position === "left" ? "4rem" : "auto",
    marginRight: position === "right" ? "4rem" : "auto",
  };

  const textStyle = {
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <div style={textboxStyle}>
        <p style={textStyle}>{children}</p>
      </div>
    </div>
  );
}

export default Textbox;
