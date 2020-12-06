import React from "react";

const DownIcon = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-34px",
        transform: "translateY(-45px)",
      }}
    >
      <div>
        <img style={{ maxWidth: "30px" }} src={props.icon} />
      </div>
    </div>
  );
};

export default DownIcon;
