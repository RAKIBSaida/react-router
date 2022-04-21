import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    // const params=useParams();
    // useEffect(()=>{
    //     console.log(params)
    // },[])
    const {id,slug}=useParams();
  return (
    <div className='row'>
        <div className="col-md-12">
           {/*  <h1>Blog {params.id}</h1>
            <p>Blog {params.slug}</p> */}
            <h1>Blog {id}</h1>
            <p>Blog {slug}</p> 
            <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
        </div>

    </div>
  )
}

export default Blog