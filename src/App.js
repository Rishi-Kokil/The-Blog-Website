import "./index.css"
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    {/* This is the Element inside which we will changes pages */}
                    <Switch>
                        {/* when type the end point in the browser then / end point will get render even after typing /create 
                        the reason is that react finds the first match and return that thus to get the exact end point
                        we use exact inside the property
                        */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/create">
                            <Create></Create>
                        </Route>
                        <Route exact path="/blogs/:id">
                            <BlogDetails></BlogDetails>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>

                </div>
            </div>
        </Router>
    );
}

export default App;