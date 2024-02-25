import React from "react";
import AddImage from "../images/AddImage.png";
import AddGif from "../images/AddGif.png";
import AddPoll from "../images/AddPoll.png";
import AddEmoji from "../images/AddEmoji.png";
import ScheduleTweet from "../images/ScheduleTweet.png";
import Profile from "../images/Profile.png";

class TweetEditorInput extends React.Component {
  render() {
    return (
      <input className="tweet-editor-input" placeholder="What's happening?" />
    );
  }
}

class TweetEditorActions extends React.Component {
  render() {
    return (
      <div className="tweet-editor-actions">
        <img src={AddImage} alt="Add Image" />
        <img src={AddGif} alt="Add GIF" />
        <img src={AddPoll} alt="Add Poll" />
        <img src={AddEmoji} alt="Add Emoji" />
        <img src={ScheduleTweet} alt="Schedule Tweet" />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button" style={{ cursor: "pointer" }}>
        Tweet
      </button>
    );
  }
}

class TweetEditorButtons extends React.Component {
  // Added "React" here for consistency
  render() {
    return (
      <div className="tweet-editor-buttons">
        <TweetEditorActions />
        <Button />
      </div>
    );
  }
}

class TweetEditorForm extends React.Component {
  render() {
    return (
      <div className="tweet-editor-form">
        <form>
          <TweetEditorInput />
        </form>
        <TweetEditorButtons />
      </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img src={Profile} alt="User Avatar" style={{ cursor: "pointer" }} />
      </div>
    );
  }
}

export default class TweetEditor extends React.Component {
  render() {
    return (
      <div className="tweet-editor">
        <Avatar />
        <TweetEditorForm />
      </div>
    );
  }
}
