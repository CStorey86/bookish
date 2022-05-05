import React from 'react';
import './requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


function AllRequests(){
    return (
        <div className="AllRequests">
            <NavBar/>
            <div>
                {/* Employee/Authoriser dashboard */}
                <div className="LeftPanel">
                    <h2>ALL REQUESTS </h2>
                    <div className="SearchBar">
                        <div className="Sort">
                            <p>Sort <FontAwesomeIcon icon={faSort} /></p>
                        </div>
                        <div className="Search">
                            <p> Search </p>
                            <input type="text"/>
                            <p> <FontAwesomeIcon icon={faSearch} /></p>
                        </div>
                    </div>
                    <div className="RequestList" >
                        <div className="requestItem">Request 1</div>
                        <div className="requestItem">Request 2</div>
                        <div className="requestItem">Request 3</div>
                        <div className="requestItem">Request 4</div>
                        <div className="requestItem">Request 5</div>
                    </div>
                </div>
                
                <div className="RightPanel">
                    <h2>REQUEST </h2>
                        <div className="card">
                            <p>Title: </p>
                            <p>Author: </p>
                            <p>Year: </p>
                            <p>Publisher: </p>
                            <p>Cost: </p>
                            <p className="status">Status: </p>
                        </div>
                                

                    {/* If allocated - this button cant be seen */}
                    <button className="ActionBtn">Delete</button>
                    {/* If allocated - this button changes to "Add Information" */}
                    <button className="ActionBtn">Edit</button>
                </div>
            </div>
            <Footer />
      </div>
    );
    
}

export default AllRequests;