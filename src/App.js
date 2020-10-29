import React, { useState } from "react";
import "./index.css";
import CommentDetail from "./CommentDetail";
import ApproveCard from "./ApproveCard";

export default function Comment() {
  const [scroll, setScroll] = useState([]);
  function handleScroll(e) {
    if (
      e.target.scrollHeight - (e.target.offsetHeight + e.target.scrollTop) <
      0
    ) {
      setScroll(
        scroll.concat(
          <>
            <ApproveCard>
              <CommentDetail />
            </ApproveCard>
            <ApproveCard>
              <CommentDetail />
            </ApproveCard>
            <ApproveCard>
              <CommentDetail />
            </ApproveCard>
          </>
        )
      );
    }
  }
  return (
    <div style={{ position: "absolute", top: 30, right: 10 }}>
      <div
        style={{
          borderLeft: "10px solid transparent ",
          borderRight: "10px solid transparent ",
          borderBottom: "10px solid #2185d0",
          width: 0,
          height: 0,
          margin: "15px 0 0 280px",
        }}
      ></div>
      <div
        className="ui container comments"
        style={{
          border: "2px solid #2185d0",
          width: "fit-content",
          padding: "10px",
          borderRadius: 5,
          margin: 0,
          height: 500,
          overflowY: "auto",
        }}
        onScroll={handleScroll}
      >
        <ApproveCard>
          <CommentDetail />
        </ApproveCard>
        <ApproveCard>
          <CommentDetail />
        </ApproveCard>
        <ApproveCard>
          <CommentDetail />
        </ApproveCard>
        <ApproveCard>
          <CommentDetail />
        </ApproveCard>
        {scroll}
      </div>
    </div>
  );
}
