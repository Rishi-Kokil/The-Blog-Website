import {useState} from "react"

const Home = () => {
    const [blogs , SetBlogs] = useState([
        {title : "My New Website", body : "Lorem-ipsum....." , author : "Author1" , id : 1},
        {title : "My favourite food", body : "Lorem-ipsum....." , author : "Author2" , id : 2},
        {title : "Movies I like", body : "Lorem-ipsum....." , author : "Author3" , id : 3},
    ]);
     
    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key = {blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;