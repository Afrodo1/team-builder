import React, {useState} from 'react';
import Users from './usersList';


export default function Forms (props){
    const [user, setUser] = useState({ name: "", email: "", role: "" });

    const handleNameChange = event => {
      setUser({ ...user, name: event.target.value });
    };
  
    const handlePasswordChange = event => {
      setUser({ ...user, email: event.target.value });
    };
  
    const handleRoleChange = event => {
      setUser({ ...user, role: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.name);
        console.log(user.email);
        console.log(user.role);
        const newUser = {
            ...user,
            id: Date.now()
        };
        props.addNewUser(newUser);
             
    };

    return(
        <div className="Forms">
        <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor="title">
            Name:
            <input
                id = "title"
                type="text"
                name="name"
                onChange={event => handleNameChange(event)}
            />
            </label>
            <label htmlFor="people">
            Email:
            <input
                id = "people"
                type="text"
                name="email"
                onChange={event => handlePasswordChange(event)}
            />
            </label>
            <label htmlFor="role">
            Team Role:
            <input
                id = "role"
                type="text"
                name="role"
                onChange={event => handleRoleChange(event)}
            />
            </label>
            <button type ="submit">Add Team Member!</button>
      </form>
      <h3>Hello my name is {user.name|| 'uknown'} my email is {user.email||"unkown"} and my role on my team is {user.role||'uknown'}!!!</h3>
     
        </div>
    )
}