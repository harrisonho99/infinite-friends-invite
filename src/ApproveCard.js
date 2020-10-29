import React from "react";
const ApproveCard = (props) => {
  return (
    <div className="ui card" style={{ marginRight: 0 }}>
      <div className="content" style={{ textAlign: "center" }}>
        {props.children}
      </div>
      <div className="extra content">
        <div
          className="ui two buttons"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            style={{
              width: "40%",
              border: "green 2px solid",
              background: "white",
              borderRadius: 5,
            }}
          >
            Accept
          </button>
          <button
            style={{
              width: "40%",
              border: "red 2px solid",
              background: "white",
              borderRadius: 5,
            }}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};
export default ApproveCard;
