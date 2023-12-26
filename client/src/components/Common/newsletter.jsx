import React, {useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Newsletter(){
  
    const footerSubscribe = {
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }
    const logoNews = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const logoHeading ={
        margin: '0',
        color: '#D0D0F7',
    }
    const logoParagraph = {
        color: '#D0D0F7',
        margin: '4px 0 20px 0',
    }
    
    const footerTop =  {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'start',
        padding: '16px 16px',
        justifyContent: 'space-around',
      }
      const logoNews2 = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
      const footerSubInput = {
        border: '1px solid white',
        color: 'white',
        outline: 'black',
        minHeight: '6px',
        backgroundColor: '#100034',
        fontSize: '1.1rem',
        flex: '1 0 120px',
        padding: '5px 20px',
      }
      const faCheck = {
        color: 'white',
        fontSize: '1.5rem',
      }
      const buttonSub = {
        cursor: 'pointer',
        backgroundColor: '#d51a6d',
        color: 'white',
        fontSize: '1.25rem',
        minWidth: '120px',
        minHeight: '36px',
        flex: '1 0 80px',
        whiteSpace: 'nowrap',
        padding: '8px 15px',
        border: '0',
        outline: 'none',
      }
      // const bottom  = {
      //   cursor: 'pointer',
      //   backgroundColor: '#100034',
      //   color: 'white',
      //   fontSize: '1.25rem',
      //   minWidth: '120px',
      //   minHeight: '36px',
      //   flex: '1 0 80px',
      //   whiteSpace: 'nowrap',
      //   padding: '8px 15px',
      //   border: '1px solid white',
      //   outline: 'none',
      // }
      const showToastMessage = () => {
        toast.success("Subscription Successfull !", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        });
      };
      const showCorrectEmail = () =>{
        toast.error("Invalid Email !", {
            position: toast.POSITION.TOP_CENTER,
            className : "toast-message"
          });
      }
      const errorSubscription = () => {
        toast.warning("User Already Subscribed", {
          position: toast.POSITION.TOP_CENTER
          });
        }
        const internetError = () => {
          toast.warning("Network Errror", {
            position: toast.POSITION.TOP_CENTER
            });
            
        
          }
      
    const [email, setEmail]= useState("");
    // useEffect(() => {
    //     const myPromise = new Promise((resolve) =>
    //       fetch("https://jsonplaceholder.typicode.com/posts/1")
    //         .then((response) => response.json())
    //         .then((json) => setTimeout(() => resolve(json), 3000))
    //     );
      
    //     toast.promise(myPromise, {
    //       pending: "Promise is pending",
    //       success: "Promise  Loaded",
    //       error: "error",
    //     });
    //   }, []);
//  const mak = () => {
//   const myPromise = new Promise((resolve) =>
//   // fetch("https://jsonplaceholder.typicode.com/posts/1")
//   //   .then((response) => response.json())
//   //   .then((json) => setTimeout(() => resolve(json), 3000))
//   axios.post("http://localhost:3500/newsletter",
//   {email : email},
//     {
//  headers: {
//    'X-Api-Key': process.env.REACT_APP_FRONTEND_BACKEND_PADDLOCK,
//    'Content-Type': 'application/json',
//  },
// }).then((response)=> console.log(response))
// .then((json) => setTimeout(() => resolve(json), 3000))
// );

// toast.promise(myPromise, {
//   pending: "Loading",
//   success: "subscription successfull",
//   error: "error",
// });
 // }
    const Subscribe = () => {
        axios.post("http://localhost:3500/newsletter",
         {email : email},
           {
        headers: {
          'X-Api-Key': process.env.REACT_APP_FRONTEND_BACKEND_PADDLOCK,
          'Content-Type': 'application/json',
        },
    })
        .then((response)=>{
            if(response.status === 201){
              showToastMessage()
            }else{
              errorSubscription()
              console.log(response.status)
                console.log("error in subscribing user")
                
            }
          })
          .catch((error)=>{
            console.error("Error : " +error)
      internetError()
          })
    }
    
      function InputChange(event){
        setEmail(event.target.value)
          }
        function inputSubmit(event){
            event.preventDefault();
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const isEmailValid = emailRegex.test(email);
          if(!isEmailValid){
            showCorrectEmail()
          }
          if(isEmailValid){
            Subscribe()
          }
        }
    return <div>
    <ToastContainer />
            <div className="container logo-news" style={logoNews}>
                    <div className="">
                    </div>
                  </div>
                <section className="footer-top row" style={footerTop}>
                    <div className="footer-headline logo-news-2" style={logoNews2}>
                        <h2 className="under-logo" style={logoHeading}>Subscribe to our newsletter</h2>
                        <p style={logoParagraph}>
                           Fuel Your Inbox With The Latest Trends in Sports 
                            <i className="fa-solid fa-check" style={faCheck}></i>
                        </p>
                    </div>
                    <div className="footer-subscribe col-sm-12 col-sm-12 col-sm-12" >
                    <form onSubmit={inputSubmit} style={footerSubscribe}>
                        <input type="email"  style={footerSubInput}
                        spellCheck="false" placeholder="Your Email" value={email} onChange={InputChange}/>
                        <button style={  buttonSub} >
                          subscribe
                        </button>
                      
                        </form>
                      
                        </div>
                        </section>
                        </div>
}
export default Newsletter