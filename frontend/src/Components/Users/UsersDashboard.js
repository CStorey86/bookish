import React from 'react';
import axios from '../../Api/axios';
import './users.css';



import SingleUser from './SingleUser';
import UsersList from './UsersList';



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
        const url='/users'; 

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
            <div className="UserDashboard">
                <div className="LeftPanel">
                    <h2>ALL USERS </h2>
                    <UsersList users={this.state.users} updateCurrentUser={this.updateCurrentUser}/>                            
                </div>

                <div className="RightPanel">
                    <h2>USER </h2>
                    <SingleUser user={this.state.currentUser}/>
                </div>                    
            </div>
        );
    }
}

export default UsersDashboard;