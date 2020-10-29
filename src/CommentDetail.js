import React from "react";
import faker from "faker";
const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.name.firstName()} {faker.name.lastName()}
        </a>
        <div className="metadata">
          <span className="date">{faker.date.past().toLocaleTimeString()}</span>
        </div>
        <div className="text">{faker.name.title()}</div>
      </div>
    </div>
  )
}
export default CommentDetail;
