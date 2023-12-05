import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data , isPending , error} = useFetch("http://localhost:8000/blogs");


    return (
        <div className="home">

            {/* Conditional Rendering*/}

            {error && <div>{error}</div>}


            {/* Below code runs only when the blogs data is fetched by the fetch api completely */}
            {/* {isPending && <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />}  */}
            {/* Alternate Syntax */}

            {!isPending ? <BlogList blogs={data} title="All Blogs!" /> : "Loading...."}
        </div>
    );
}

export default Home;