
import { useState , useEffect } from "react"

const useFetch = (url) => {
    const [data, SetData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error , setError] = useState(null);

    // USE EFFECT does not return any thing it will run any time a re render is triggered 
    useEffect(() => {

            const abortCnt = new AbortController();
            //here a promise is returned by fetch api
            // we can pass the fuilfillment value by using then method

            // local server that is running on our machine
            fetch(url , { signal : abortCnt.signal})
                .then(res => {
                    if(!res.ok){ // response object has a property of OK and it is boolean
                        // when response is successfull then it is set to true else false
                        throw new Error("Could Not Fetch data")
                    }
                    return res.json(); // it is returned if there is no error
                    
                })  // .json is used to parse the data into JSON format
                .then(data => { 
                    SetData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === "AbortError"){
                        console.log('Fetch Aborted')
                    } 
                    else{
                        // else block is necessary because we want to render this only if there is no Abort Error
                        setError(err.message);
                        setIsPending(false);
                    }
                    
                });
                return ()=> abortCnt.abort();
        }, [url]); 
        // empty array so that the website does not invoke the anonymous function on every re render
        // use Effect will be triggered only on first render 
        // The array is an Dependancy array that has the useState variables in it
        // use effects runs on first renders and any render triggered by those use state variables

        return {data , isPending , error};
}
export default useFetch;
