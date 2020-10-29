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
              color:"white",
              background: "rgb(5,112,230)",
              borderRadius: 10,
              border:'none',
              height:30
            }}
          >
            Accept
          </button>
          <button
            style={{
              width: "40%",
              border: "none",
              background: "rgba(200,24,53,.7)",
              borderRadius: 10,
              height:30,
              color:"white",
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
