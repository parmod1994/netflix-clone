import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { formValidation } from "../utils/FormValidation";

const Login = ()=>{
     const [signInForm , SetSignInForm] = useState(true)
     const [error, seterror] = useState()
    const handelSignInForm = ()=>{
        SetSignInForm(!signInForm)
    }
    const email = useRef()
    const password = useRef()
    const fullname = useRef()
    

 
    const  handleValidation = ()=>{
        if(signInForm){}
        const response = formValidation(email.current.value, password.current.value)
        seterror(response)
    }
    return (
    
        <div>
            <Header />
            
            <div className=" absolute  ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
            </div>
        
            <form   onSubmit={(e)=> e.preventDefault ()}  className=" bg-opacity-80 p-12  w-3/12 right-0 left-0  absolute  my-36  mx-auto bg-black text-white">
                <h1 className=" text-3xl py-4  font-bold "> {signInForm  ? 'Sign In ' : 'Sign Up'}</h1>
                {
                    !signInForm && 
                     <input type="text" ref={fullname} placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />
                }
                <input type="text" ref={email} placeholder="Email or phone number" className="p-2 my-4 w-full bg-gray-700" />
                <input type="password" ref={password} placeholder="Password" className=" bg-gray-700 p-2 my-4 w-full" />
                
                <button className=" w-full my-4 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4   hover:border-transparent rounded bg-red-600" onClick={handleValidation}>
                 {signInForm  ? 'Sign In ' : 'Sign Up'}
                </button>
                <p className=" text-red-800 py-4 font-bold shadow-md " >{error}</p>
                 <p className="py-4 cursor-pointer" onClick={handelSignInForm}>{signInForm ?  'New to Netflix? Sign up now' : 'Already registered? Sign in Now'}</p>
            </form>
           
        </div>
        
    )
}

export default Login;