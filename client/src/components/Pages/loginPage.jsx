import React, {useState, useEffect} from "react"
import LoginForm from "../Auth/loginForm"
import Loader from "../Common/loader"
function LoginPage(){
    const [loading, setLoading] = useState(true);

    // Simulate API request
    useEffect(() => {
      // Make your API requests here
      // Once the API requests are complete, set loading to false
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Simulating a 2-second delay, replace with your actual API calls
    }, []);
    return <div>
    {loading ? <Loader /> : <LoginForm />}
    </div>
   
}
export default LoginPage