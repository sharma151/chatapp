import React from "react";

const Message = () => {
  return (
    <div className="message ">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messagecontent">
        <p>hello</p>
        <img
          src="https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
