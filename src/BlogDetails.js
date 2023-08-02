import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import{useHistory} from "react-router-dom/cjs/react-router-dom"
const BlogDetails = () => {
    const {id}=useParams();
    const history=useHistory()
    const{data:blog}=useFetch(" http://localhost:8000/blogs/"+ id);
    const handleClick=()=>
    {
        fetch(" http://localhost:8000/blogs/"+ blog.id,{
            method:"DELETE"
        })
        .then(()=>
        {
        history.push("/")

        })
    }
    return ( 
        <div className="blog-details">
           {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p> Written BY {blog.author}</p>
                <div>
                    {blog.body}
                </div>
                <button onClick={handleClick}>Delete Blog</button>
            </article>
           ) }
        </div>
     );
}
 
export default BlogDetails;