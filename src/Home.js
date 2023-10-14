import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, SetBlogs] = useState([
        { title: "My New Website", body: "Lorem-ipsum.....", author: "Author1", id: 1 },
        { title: "My favourite food", body: "Lorem-ipsum.....", author: "Author2", id: 2 },
        { title: "Movies I like", body: "Lorem-ipsum.....", author: "Author3", id: 3 },
    ]);

    const [name, setName] = useState("Mario");

    useEffect(
        () => { console.log("Use effect is triggered"); },
        [name]
    );

    const handleClick = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        SetBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />
        </div>
    );
}

export default Home;