import React from "react";
import Header from "./Header";
import TweetEditor from "./TweetEditorClasses";

export default function Timeline() {
  return (
    <div className="timeline">
      <Header />
      <TweetEditor />
    </div>
  );
}
