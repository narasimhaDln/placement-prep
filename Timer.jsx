import React, { useState, useEffect, useRef } from "react";
import { useReducer } from "react";

// function Timer() {
//   const [seconds,setSecondes]=useState(0)
//   const [isRunnig,setIsRunning]=useState(true)
//   useEffect(()=>{
// const timeId=setInterval(()=>{
//     if(isRunnig){
//         setSecondes((prev)=>prev+1)
//     }
// },1000);
// return ()=>{
//     clearInterval(timeId)
// };
//   },[isRunnig])
//   const handlePause=()=>setIsRunning(false)
//   const  handleResume=()=>setIsRunning(true)
//   const handleReset=()=>{
//     setSecondes(0);
//     setIsRunning(false);
//   }

//   return(
//    <div>
//      <h1>seconds:{seconds}</h1>
//     <button onClick={handlePause}>Pase</button>
//     <button onClick={handleResume}>Resume</button>
//     <button onClick={handleReset}>Reset</button>
//    </div>
//   )
// }
// function controlledComponents(){
//     const [name,setName]=useState("");
//     const handleChange=(e)=>{
//        setName(e.target.value)
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(name)
       
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input value={name} onChange={handleChange}/>
//             <input type="submit" onChange={handleSubmit}/>
//         </form>
//     )
// }
// export default controlledComponents;
// function uncontrollComponents(){
// const message=useRef()
// const handleSubmit=(e)=>{

//    console.log(message.current.value)
// }
// return(
//   <div>
//       <input ref={message}/>
//       <button onClick={handleSubmit}>Submit</button>
//   </div>
// )
// }
// export default uncontrollComponents
// function form() {
//     const ref = useRef();
//     const handleSubmit = () =>{
//          console.log(ref.current.value);
//     }
//     return (
//         <div>
//             <input ref={ref} placeholder="name" />;
//        <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
//   }
//   export default form
//   function handleReactLifeCucles(){
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log("component mount")
//         return()=>{
//             console.log("component didmount")
//         }
//     },[])
    
//     useEffect(()=>{
//         console.log("component updated")
//     })
//     return(
//         <div>
//             <h1>count{count}</h1>
//             <button onClick={()=>setCount(count+1)}>COunt</button>
//         </div>
//     )
//   }
// // export default Timer;
// export default handleReactLifeCucles
// function counter=()=>{
//     const [seconds,setSeconds]=useState(0);
//     cosnt [isRunning,setIsRunning]=useState(true);
//     useEffect(()=>{
//       let timerId=setSeconds(()=>{
//         if(isRunning){
//             setInterval((prev)=>prev+10)
//         }
//         return()=>{
//             clearInterval(timerId)
//         }
//       })
//     },[isRunning])
//     const handlePase=()=>setSeconds(false)
//     const handleResume=()=>setSeconds(true);
//     const handleReset=()=>{
//         setSeconds(0)
//         setIsRunning(false)
//     }
// }
//fetching data 
function fetchData=()=>{
   let data= {
      "users": {
        "user1": {
          "id": "1",
          "name": "Alice Johnson",
          "email": "alice@example.com",
          "bio": "Web Developer",
          "profilePicture": "https://firebase.storage/alice-profile.jpg"
        },
        "user2": {
          "id": "2",
          "name": "Bob Smith",
          "email": "bob@example.com",
          "bio": "UI Designer",
          "profilePicture": "https://firebase.storage/bob-profile.jpg"
        }
    }
   }
    return(
        <div>
        <ul>
      //converting object keys into array of map
      {Object.keys(data.map((key)=>{
        const user=data.users[key]
        return(
            <li key={user.id}>
            {user.name}-{user.email}-{user.bio}
            </li>
        );
      }))}
        </ul>
        </div>
    )
    
}
export default  fetchData
