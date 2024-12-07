import {useState,useEffect} from "react"


function App() {
    const[users,setUsers]=useState([]);
    const fetchData=async function(){
      let URL="https://jsonplaceholder.typicode.com/users"
      try{

        const response=await fetch(URL);
        const data=await response.json()
        setUsers(data)
      }
      catch(error){
        console.log("error")
      }
    }
    useEffect(()=>{
      fetchData()
    },[])
    return(
      <div>
        <h1> user List</h1>
      
          {users.map((user)=>(
            <div key={user.id}>
              <h2> UserName:{user.username}</h2>
              <p>Name:{user.name}</p>
              <p>Email:{user.email}</p>
              </div>
          ))}
     
      </div>
    )
}

export default App
