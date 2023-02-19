import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search" />
      </div>
      <div className="userChat">
        <img
          src="https://sauravsharma.netlify.app/static/media/avatar.c4c5c8a2.png"
          alt=""
        ></img>
        <div className="userChatInfo">
          <span>saurav</span>
          
        </div>
      </div>
    </div>
  );
};

export default Search;
