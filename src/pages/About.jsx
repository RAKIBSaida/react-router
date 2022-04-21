//utilisation des hooks useNavigate pour rediriger vers une autre page
import React from 'react'
import{useNavigate} from "react-router-dom";

const About=()=> {
    const navigate=useNavigate();
  return (
    <div className='row'>
      <div className='col-md-12'>
          <h1>About page</h1>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <button onClick={()=>navigate("/")}>Back to home</button>
      </div>
    </div>
  )
}

export default About