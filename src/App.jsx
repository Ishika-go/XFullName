import { useState } from 'react'


function App() {
  const [firstName, setFirstName] = useState("");

   const [lastName, setLastName] = useState("");
   const [fullName, setFullName] = useState("");

const handleOnchangeForFirstName= (e)=>{
  setFirstName(e.target.value);
}
const handleOnchangeForLastName = (e)=>{
  setLastName(e.target.value);
}

const handleOnSubmit= (e)=>{
  e.preventDefault();
  let fn = firstName[0].toUpperCase() + firstName.slice(1);
  let ln = lastName[0].toUpperCase() + lastName.slice(1);
  let fullname = `${fn} ${ln}`;
  setFullName(fullname);
  setFirstName("");
  setLastName("");


}
  return (
    <>
    <h2>Full Name Display</h2>
      <form onSubmit={handleOnSubmit}>
      <label handleFor ='firstName'>First Name: </label>
      <input type ='text' id ='firstName' requird  value = {firstName}  onChange = {handleOnchangeForFirstName}></input> <br /> 

      <label handleFor = 'lastName' >Last Name: </label>
      <input type = 'text' id = 'lastName' requird value = {lastName} onChange = {handleOnchangeForLastName}></input>   <br/>  

<button type ="submit">Submit</button>
      </form>

      {fullName!=""&&(<p>Full Name: {fullName}</p>)}
        
    </>
  )
}

export default App
