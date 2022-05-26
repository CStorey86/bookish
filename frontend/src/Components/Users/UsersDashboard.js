import React from 'react';
import axios from 'axios';
import './users.css';

import UsersList from './Users';
import SingleUser from './SingleUser';


class UsersDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users: [],
            currentUser: {},
        }
        this.updateCurrentUser = this.updateCurrentUser.bind(this);
    }

    componentDidMount(){
        const url='http://localhost:4000/users'; 

        axios.get(url)
        .then((Response) => {
          //set users[] as data recieved from api call
          this.setState({
            users: Response.data     
          })
        })
        .catch((error) => {
          console.log(error);
        });
    };

    updateCurrentUser(item){
        this.setState({
            currentUser: item,
        })
    }

    render(){
    
        return (
            <div>
                <div className="LeftPanel">
                    <h2>USERS </h2>
                    <UsersList users={this.state.users} updateCurrentUser={this.updateCurrentRequest} />
                </div>

                <div className="RightPanel">
                    <SingleUser user={this.state.currentUser}/>
                </div>                    
            </div>
        );
    }
}

export default UsersDashboard;