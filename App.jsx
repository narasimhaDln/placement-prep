
import React, { useState, useEffect } from "react";


function App() {
//   const [isEditMode, setIsEditMode] = useState(false);

//   // User data to be passed as props
//   const [userData,setUserData]=useState({
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     bio: "Web Developer" 
//   })
//   const [sucessMessage,setSucessMessage]=useState("")
// const handleSave=(updatedUser)=>{
//   setUserData(updatedUser)
// setSucessMessage("profile updated sucessfully")
// }
// setTimeout(()=>{
//   setSucessMessage("")
// },5000)
//   return (
//     <div>
//       <button onClick={() => setIsEditMode((prev)=>!prev)}>
//         {isEditMode ? "View Profile" : "Edit Profile"}
//       </button>
//       {isEditMode ? (
//         <EditProfile user={userData} onSave={handleSave} />
//       ) : (
//         <UserProfile user={userData} />
//       )}
//       {sucessMessage&&<p>{sucessMessage}</p>}
//     </div>
//   );
// }

// function UserProfile({ user }) {
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>Email: {user.email}</p>
//       <p>Bio: {user.bio}</p>
//     </div>
//   );
// }

// function EditProfile({ user,onSave }) {
//   const [updatedUser,setUpdateUser]=useState(user);
//   const handleChange=(e)=>{
//     const{name,value}=e.target;
//     setUpdateUser((prev)=>({...prev,[name]:value}));
//   }
//   const handleSaveClick=()=>{
//     onSave(updatedUser);
//   }

//   return (
//    <div>
//      <form>
//       <input type="text"
//       name="name"
//       value={updatedUser.name}
//       onChange={handleChange}

//        />
//       <input type="email"
//         name="email"
//         value={updatedUser.email}
//         onChange={handleChange}

//       />
//       <textarea name="bio" value={updatedUser.bio} onChange={handleChange}></textarea>
//     </form>
//     <button onClick={handleSaveClick}>save</button>
//    </div>
//   );


/**
 * Timer component demonstrates the use of `useState` for state management
 * and `useEffect` for lifecycle events like mounting and cleanup.
 */
// }
{contacts.map((contact) => (
  <li key={contact.id}>{contact.name}</li>
))}



export default App;

