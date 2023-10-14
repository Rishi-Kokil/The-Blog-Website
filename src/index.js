// This is an older Syntax
// import React from "react";
// import ReactDOM  from "react-dom";
// import "./index.css"

// import App from "./App";

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode> , 
//     document.getElementById("root")
// );

import App from "./App";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);