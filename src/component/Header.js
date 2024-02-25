import React from "react";
import HeaderRightImage from "../images/Top-Right-Header-Image.png";

function PageTitle() {
  return <div className="page-title">Home</div>;
}
function TopTweets() {
  return (
    <div className="top-tweets">
      <img src={HeaderRightImage} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <PageTitle />
      <TopTweets />
    </div>
  );
}
export default Header;
