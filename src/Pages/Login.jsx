import React, { useState } from "react";
import './Pages.css'
import { Link } from "react-router-dom";



const LoginScreen = () => {

    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [alertMessage , setAlertMessage]=useState()
    const[data , setData]=useState()
    const[loading , setLoading]=useState()

    const submit = async () => {

        setAlertMessage('')
     
    
        setLoading(true)
    
        var options = {
          method: 'POST',
      
          headers:
          {
            'content-type': 'application/json',
           
          },
          body: JSON.stringify({
            "userName":email,
            "password":password,
            "system":"admin"
          })
        };
    
    
    
    
        if (!email || !password) {
          setAlertMessage("Required all fields");
          setLoading(false)
        }
    
        
        else {
    
          const response = await fetch('https://projects.harvices.in/ticketingappapitest-uat/userMST/login/', options)
          const data = await response.json();
           console.log(data)  
          
           if(data.message== 'Success')
           {
            setAlertMessage('login Sucessfully')
            setLoading(false)
            setEmail('');
            setpassword('')
           }
           else if(data.message== 'User not found!')
           {
            setAlertMessage('Invalid Details')
            setLoading(false)
            setpassword('')
           }
      }
      
    }

    return (
        <div className="container">

            <div classname="form">
                <div className="login-page">

                    <div className="form">
                        <h3 >Login Form</h3>
                           <p style={{color:'red'}}>{alertMessage}</p>

                        <div className="login-form">
                            <input type="text" placeholder="username" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                            <input type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                           {!loading && <button onClick={submit}>login</button>}
                           {loading &&  <button> <i className="fa fa-spinner fa-spin"/></button>}
                            <p className="message"> <Link to="/create-country">Create Country</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginScreen
