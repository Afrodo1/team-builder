import React from 'react';



const People = props => {
    return (
      <div className="people-list">
        {props.people.map(people => (
          <div className="people" key={people.id}>
            <h2>{people.name}</h2>
            <p>{people.email}</p>
            <p>{people.role} Developer</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default People;




























//  const Users = props => {

//     return(
//         <div className="UsersList">
//             {props.usersList.map(user =>{
//                 return(
//                     <div className="people" key={user.id}>
//                        <h2>{user.name}</h2>
//                        <h3>{user.email}</h3>
//                        <h3>{user.role}</h3>
//                     </div> 
//                 )
//             })}
//         </div>
//     )
// }

// export default Users;