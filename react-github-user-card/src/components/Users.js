// This will render the individual user cards.

import React, { Component } from "react";
import axios from "axios";
import User from "./User";

export default class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const githubUsers = [
      "tonysorensen",
      "LoganSorensen",
      "peterevilla",
      "tetondan",
      "dustinmyers",
      "LukeSmithxyz",
    ];
    githubUsers.forEach((user) => {
      let newName = user;
      axios
        .get("https://api.github.com/users/" + `${newName}`)
        .then((response) => {
          this.setState({
            users: [
              ...this.state.users,
              {
                name: response.data.name,
                avatar: response.data.avatar_url,
                login: response.data.login,
                location: response.data.location,
                link: response.data.link,
                followers: response.data.followers,
                following: response.data.following,
                bio: response.data.bio,
              },
            ],
          });
          console.log("response", response);
          console.log("state", this.state);
        })
        .catch((error) => {
          console.log("error retrieving data", error);
        });
    }, []);
  }

  render() {
    return (
      <div>
        <User users={this.state.users} />
      </div>
    );
  }
}

// import React, {useEffect, useState} from 'react'
// import axios from 'axios'
// import User from './User'

// export default function Users() {
//     const githubUsers = ['tonysorensen','LoganSorensen','peterevilla','tetondan','dustinmyers','LukeSmithxyz'];
//     const [user, setUser]=useState([])

// useEffect(() => {
//     githubUsers.forEach((user)=>{
//         let newName = user
//         axios
//         .get('https://api.github.com/users/' +`${newName}`)
//          .then((response) => {
//             //  setUser([response.data]);
//              console.log('response', response);
//            })
//            .catch((error) => {
//              console.log("error retrieving data", error);
//            });
//      }, [user])

//     }
//     )

//     return (
//         <div>
//             <User />
//         </div>
//     )
