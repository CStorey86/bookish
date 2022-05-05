import React,{Component} from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faWindow} from '@fortawesome/free-solid-svg-icons';


class ProfileEditPanel extends Component {
  render(){
    return (
            <div className="profileEditPanel">

              <div className="close">
                <FontAwesomeIcon icon={faWindowClose} />
                {/* TO DO: ON CLICK - CHANGE CSS TO DISPLAY NONE */}
              </div>

              <h2>EDIT USER PROFILE</h2>

              <form>
              <div className="editUserFormRow">
                  <label>FIRST NAME:</label>
                  <input type="text" placeholder='thisName'></input>
              </div>
              <div className="editUserFormRow">
                  <label>LAST NAME:</label>
                  <input type="text" placeholder='thisName'></input>
              </div>
              <div className="editUserFormRow">
                  <label>EMAIL:</label>
                  <input type="text" placeholder='thisEmail@email.com'></input>
              </div>
              <button className="ActionBtn-wide" type="submit">Submit Changes</button>

{/* 
                  <label>USERTYPE:</label>
                  <input type="text" placeholder='standard user'></input> */}
              </form>

            </div>
    );
  }
}

export default ProfileEditPanel;