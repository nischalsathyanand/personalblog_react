import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const[title,SetTitle]=useState('')
    const[body,SetBody]=useState('')
    const[author,SetAuthor]=useState('')
    const history=useHistory();

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const blog={title,body,author};
        
    fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
       history.push('/');
      })

    }
    return (
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>SetTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e)=>SetBody(e.target.value)}
                ></textarea>
               <label>Blog Author</label>
                <textarea
                required
                value={author}
                onChange={(e)=>SetAuthor(e.target.value)}
                ></textarea>
                <button>Submit Blog</button>
            </form>
            
        </div>
      );
}
 
export default Create;