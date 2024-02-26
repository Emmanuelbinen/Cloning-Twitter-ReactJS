import React from "react";
import Reply from "../images/Reply.png";
import Retweet from "../images/Retweet.png";
import ReactIcon from "../images/React.png";
import Share from "../images/Share.png";
import Verified from "../images/Verified.png";
import TweetProfilePhoto from "../images/CNN-Profile-Photo.png";

function TweetAvatar(props) {
  return <img src={props.image || TweetProfilePhoto} alt="Profile Photo" />;
}

function TweetAction(props) {
  return (
    <div className="tweet-action">
      <img src={props.icon} alt={props.value} />
      {props.value}
    </div>
  );
}

function TweetActions(props) {
  return (
    <div className="tweet-actions">
      <TweetAction icon={Reply} value={props.value && props.value.reply} />
      <TweetAction icon={Retweet} value={props.value && props.value.retweet} />
      <TweetAction icon={ReactIcon} value={props.value && props.value.react} />
      <TweetAction icon={Share} value={props.value && props.value.share} />
    </div>
  );
}

function TweetTitleAuthor(props) {
  return <div className="tweet-title-author">{props.value}</div>;
}

function TweetTitleDetails(props) {
  return <div className="tweet-title-details">{props.value}</div>;
}

function TweetTitle(props) {
  return (
    <div className="tweet-title">
      <TweetTitleAuthor value={props.value.tweet_author_title} />
      <img src={Verified} alt="Verified Badge" />
      <TweetTitleDetails value="@" />
      <TweetTitleDetails value={props.value.tweet_authors} />
      <TweetTitleDetails value="." />
      <TweetTitleDetails value={props.value.tweet_time} />
    </div>
  );
}

function TweetBody(props) {
  return (
    <div className="tweet-body">
      <TweetTitle value={props.value} />
    </div>
  );
}

function TweetText(props) {
  return <p className="tweet-text">{props.value}</p>;
}

function TweetImage(props) {
  return props.value ? (
    <img className="tweet-image" src={props.value} alt="Tweet Image" />
  ) : null;
}

function TweetContent(props) {
  console.log(props.value.tweet_image);
  return (
    <div className="tweet-content">
      <TweetBody value={props.value} />
      <TweetText value={props.value.tweet_text} />
      {props.value.tweet_image && (
        <TweetImage value={props.value.tweet_image} />
      )}
      <TweetActions value={props.value.tweet_actions} />
    </div>
  );
}

export default function Tweet(props) {
  return (
    <div className="tweet">
      <TweetAvatar image={props.value["tweet_avatar"]} />
      <TweetContent value={props.value.tweet_body} />
    </div>
  );
}
