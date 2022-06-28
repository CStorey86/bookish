import React from 'react';
import SearchBar from '../SearchBar/Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort} from '@fortawesome/free-solid-svg-icons';
import {formatDate} from '../Utils';


const UsersList = (props) => {
    return ( 
        <div className="RequestList" >
            <SearchBar/>
            <table className="UserList">
                <thead>
                    <tr>
                        <td className ="med-col">First Name &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSort} /></td>
                        <td className ="med-col">Last Name &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSort} /></td>
                        <td className ="lrg-col" >Date Created &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSort} /></td>
                    </tr>
                </thead>
                <tbody>
                {props.users.map((item) => (
                    <tr key={item._id} onClick={props.updateCurrentUser.bind(this,item)}>
                        <td className ="med-col">{item.firstName}</td>
                        <td className ="med-col">{item.lastName}</td>
                        <td className ="lrg-col" >{formatDate(item.createdDate)}</td>
                    </tr>
                ))} 
                </tbody>
            </table>         
        </div>    
    );
}
 

export default UsersList;

