//Useful Functions for use across multiple components

export function getUserNameFromID(userID){

    const url= `http://localhost:4000/users/?userID=${userID}`; 
    const user = {};

    axios.get(url)
    .then((Response) => {
      //set requests[] as data recieved from api call
      this.setState({
           user: Response.data 
      })
    })
    .catch((error) => {
      console.log(error);
    });

    const firstName = user.firstName;
    const lastName = user.lastName;
    const fullName = firstname + " " + lastName;

    return fullName;
}


