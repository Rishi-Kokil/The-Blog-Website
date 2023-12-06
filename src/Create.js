import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title , setTitle] = useState(" ");
    const [body , setBody] = useState(" ");
    const [author , setAuthor] = useState("Private");
    const [isPending , setIsPending] = useState(false);

    const history = useHistory();   // history of the previous endpoints visited

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title , body , author};

        setIsPending(true);


        fetch("http://localhost:8000/blogs" , {
            method : "POST" ,
            headers : {'Content-type' : "application/json"},
            body : JSON.stringify(blog),
        }).then(()=>{
            console.log("New blog added");
            setIsPending(false)
        }).catch(err => { console.log(err.message);})

        //redirecting to the previous page

        // history.go(-1); 

        // redirecting to the home page we will use
        history.push("/")  // we write the end point where we want to redirect
    };

    return (
        <div className="create">
            <h2>Create a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title :</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e)=>{setTitle(e.target.value)}}
                />
                <label >Blog body :</label>
                <textarea 
                    required
                    value={body}
                    onChange={ (e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>Blog author :</label>
                <select
                    value={author}
                    onChange={ (e)=>{setAuthor(e.target.value)}} 
                >
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                </select>
                {!isPending ? <button>Add blog</button> : <button disabled>Please wait.....</button>}
            </form>
        </div>
    );
}

export default Create;