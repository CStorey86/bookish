import React from 'react';
// import SearchBar from '../SearchBar.js/Searchbar';

const UsersList = (props) => {
    return ( 
        <div>
            {/* <SearchBar /> */}
            <div className="UserList">
                {props.users.map((item) => (
                    <div  key={item._id}>
                        <a onClick={props.updateCurrentUser.bind(this,item)}>
                            <div className ="userItemRow">
                                <div className="userName">
                                    {item.firstName} {item.lastName}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}      
            </div>
        </div>
    
    );
}
 

export default UsersList;

