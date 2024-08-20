// POST request sample

import React, { useState } from "react";

function Post(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            })

            })

            if(!res.ok){
                throw new Error(Error, "Network Error fetching data")
            }

            if(error) return <div>error, {error}</div>

            const data = await res.json()
            setResponse(data)
            setTitle("")
            setBody("")
            
           
            }catch(error){
                setError(error.message, "Error fetching data")
            }
    
    }

    function handleTitleChange(event){
       setTitle(event.target.value)
    }

    function handleBodyChange(event){
        setBody(event.target.value)
     }
    
    return(
        <div>
         <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Title">Title</label>
            <input type="text"
            value={title}
            required
            onChange={handleTitleChange}
            />
        </div>

        <div>
            <label htmlFor="Body">Body</label>
            <input type="text"
            value={body}
            required
            onChange={handleBodyChange}
            />
        </div>

        <button type="submit">Submit</button>

         </form>
    {response && (
      <div>
        <p>ID: {response.id}</p>
        <p>Title: {response.title}</p>
        <p>Body: {response.body}</p>
      </div>
    )}
         
        </div>
    )
}


export default Post;