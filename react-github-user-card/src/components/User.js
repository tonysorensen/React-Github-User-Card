// Build out the user card here.
import React from "react";

export default function User(props) {
  return (
    <div className="user">
      {props.users.map((item, index) => (
        <div className="userCard" key={index}>
          <div className="avatar">
            <img src={item.avatar} alt="Github user avatar" />
          </div>

          <div className="info">
            <h3 className="name">{item.name}</h3>
            <p className="userName">Github Username: {item.login}</p>
            <br />
            <p className="bio">Bio: {item.bio}</p>
            <br />
            <p className="followers">Followers: {item.followers}</p>
            <p className="following">Following: {item.following}</p>
            <br />
            <p className="userLocation">Location: {item.location}</p>
            <a className="link">{item.link}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
