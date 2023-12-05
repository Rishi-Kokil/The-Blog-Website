

// we are using destructuring sytax for directly accessing the props object properties

// blogs array and title is taken as parameters 

const BlogList = ({ blogs, title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>

                    </div>
                ))
            }
            
        </div>
    );
}

export default BlogList;