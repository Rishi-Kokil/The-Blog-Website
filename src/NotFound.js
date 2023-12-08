import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404 Page Not Found</p>
            <Link to="/">Go to Home Page</Link>
        </div>
     );
}
 
export default NotFound;