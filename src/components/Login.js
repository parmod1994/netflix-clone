import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { formValidation } from "../utils/FormValidation";
import axios from "axios";


const Login = () => {

    const [signInForm, SetSignInForm] = useState(true)
    const [error, seterror] = useState()
    const handelSignInForm = () => {
        SetSignInForm(!signInForm)
    }
    const useremail = useRef()
    const pass = useRef()
    const fullname = useRef()



    const handleValidation = async() => {
        if (signInForm) { }
        const response = formValidation(useremail.current.value, pass.current.value)
        seterror(response)
        if (response) return
        const email = useremail.current.value;
        const password = pass.current.value
        if(!signInForm){
            //signup form
            try {
               
                const userData = await axios.post("http://localhost:4000/api/user/register", {email, password})
                console.log(userData)
                
            } catch (error) {
                console.log("error", error)
                
            }
        }else{

            try {
              
                const userData = await axios.post("http://localhost:4000/api/user/login", {email, password})
                console.log(userData)
                
            } catch (error) {
                console.log("error", error)
                
            }

        }
       
        
    }
    return (

        <div className="  relative ">
            <Header />

            <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
  </div>

  <form onSubmit={(e) => e.preventDefault()} className="bg-opacity-80 p-4 sm:p-8 md:p-12 w-full sm:w-2/3 md:w-1/3 right-0 left-0 absolute my-36 mx-auto bg-black text-white">
    <h1 className="text-2xl sm:text-3xl md:text-4xl py-2 sm:py-4 md:py-6 font-bold">{signInForm ? 'Sign In ' : 'Sign Up'}</h1>
    {
      !signInForm &&
      <input type="text" ref={fullname} placeholder="Full Name" className="p-2 my-2 sm:my-4 md:my-6 w-full bg-gray-700" />
    }
    <input type="text" ref={useremail} placeholder="Email or phone number" className="p-2 my-2 sm:my-4 md:my-6 w-full bg-gray-700" />
    <input type="password" ref={pass} placeholder="Password" className="bg-gray-700 p-2 my-2 sm:my-4 md:my-6 w-full" />

    <button className="w-full my-2 sm:my-4 md:my-6 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded bg-red-600" onClick={handleValidation}>
      {signInForm ? 'Sign In ' : 'Sign Up'}
    </button>
    <p className="text-red-800 py-2 sm:py-4 md:py-6 font-bold shadow-md">{error}</p>
    <p className="py-2 sm:py-4 md:py-6 cursor-pointer" onClick={handelSignInForm}>{signInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign in Now'}</p>
  </form>

</div>

    )
}

export default Login;
