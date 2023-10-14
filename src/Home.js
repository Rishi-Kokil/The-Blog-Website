import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, SetBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error , setError] = useState(null);


    useEffect(
        () => {
            //here a promise is returned by fetch api
            // we can pass the fuilfillment value by using then method

            fetch("http://localhost:8000/blogs") // local server that is running on our machine
                .then(res => {
                    if(!res.ok){ // response object has a property of OK and it is boolean
                        // when response is successfull then it is set to true else false
                        throw new Error("Could Not Fetch data")
                    }
                    return res.json(); // it is returned if there is no error
                    
                })  // .json is used to parse the data into JSON format
                .then(data => { 
                    SetBlogs(data);
                    setIsPending(false);
                })
                .catch(err => setError(err.message));
        }
        , []); // empty array so that the website does not invoke the anonymous function on everu=y re render

    const handleClick = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        SetBlogs(newBlogs);
    }

    return (
        <div className="home">
            {/* Conditional Rendering*/}

            {error && <div>{error}</div>}


            {/* Below code runs only when the blogs data is fetched by the fetch api completely */}
            {/* {isPending && <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />}  */}
            {/* Alternate Syntax */}
            {!isPending ? <BlogList blogs={blogs} title="All Blogs!" /> : "Loading...."}
        </div>
    );
}

export default Home;