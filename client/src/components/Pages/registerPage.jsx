import React, {useState, useEffect} from "react"
import RegisterForm from "../Auth/registerForm"
import Loader from "../Common/loader"
function RegisterPage(){
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
    { loading ? <Loader/> :<RegisterForm />}
    </div>
}
export default RegisterPage