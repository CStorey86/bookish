//USEFUL RE-USABLE FUNCTIONS FOR THE APPLICATION

import React, {useState} from 'react';
import axios from 'axios';

export function formatDate(inputDate){
    const newDate = new Date(inputDate);
    return String(newDate);
}

export function GetUserFromID(userID){
    const [currentUser] = useState({});

    async function getUser(userID){
        const url=`http://localhost:4000/users/${userID}`; 

        axios.get(url)
            .then (res =>{

            })
            .catch((error) => {
            console.log(error);
            });
    }

    return currentUser;
}

// export class getUserFromID extends Component{
   
//     constructor(props){
//          super(props);

//         this.state={
//             currentUser: {},
//         }
//     }

//     componentDidMount(props){

//         const url =`http://localhost:4000/users/${props.userID}`;

//         axios.get(url)
//         .then(res =>{
//             this.setState({
//                 currentUser: res.data
//                 //change to only pull needed data (not everything e.g.password)
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//     }

//     render(){
//         return this.state.currentUser;
//     }

// }