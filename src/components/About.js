import React,{useState} from "react";
function About(){
  const [data, setdata] = useState("")
    
  return (
    <>
   <button onClick = {()=>setdata (data => (data = "hello worls")) }>click to </button>
  <h1 >
{data}
  </h1>
  </>);

  
}

export default About;