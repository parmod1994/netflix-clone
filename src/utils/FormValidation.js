export const formValidation = (email, password )=>
{
    const emailINput = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordInput = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailINput) return 'Email is not valid'
    if(!passwordInput) return 'Password is not valid'
  
    
    return null
}