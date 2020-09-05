// This will render the individual user cards.
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import User from './User'




export default function Users() {
    const githubUsers = ['tonysorensen','LoganSorensen','peterevilla','tetondan','dustinmyers','LukeSmithxyz'];
    const [user, setUser]=useState([])


useEffect(() => {
    githubUsers.forEach((user)=>{
        let newName = user
        axios
        .get('https://api.github.com/users/' +`${newName}`)
         .then((response) => {
             console.log('response', response);
           })
           .catch((error) => {
             console.log("error retrieving data", error);
           });
     }, [user])

    }
    )
 


    return (
        <div>
            <User />
        </div>
    )
}
