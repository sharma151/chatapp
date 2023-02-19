import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">sschat</span>
      <div className="user">
        <img
          src="https://sauravsharma.netlify.app/static/media/avatar.c4c5c8a2.png"
          alt=""
        />
        <span>saurav</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
