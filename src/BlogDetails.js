import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const {id} = useParams();
    const history = useHistory();
    // data : blog says that fetch data property of the object and then use an alias blog for the name

    const {data : blog , isPending , error} = useFetch(`http://localhost:8000/blogs/${id}`);
    
    const handleClick = ()=>{
  
        fetch(`http://localhost:8000/blogs/${blog.id}` , {
            method : "DELETE"
        }).then(()=>{
           
            history.push("/")
        })
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading......</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
                

            )}
            <button onClick={handleClick}>Delete</button>
             
           
        
        </div>
     );
}
 
export default BlogDetails;