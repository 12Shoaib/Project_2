import login from '../Components/login.module.css'
import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { isLogin  } from '../Atoms/Atom'
import { useRecoilState } from 'recoil'

function LogIn() {
    const [logInStatus , setlogInStatus] = useRecoilState(isLogin)
    const [emailCapture, setEmailCapture] = useState()
    const [passwordCapture, setPasswordCapture] = useState()
    const [emailAlert , setEmailAlert] = useState()
    const [passwordAlert, setPasswordAlert] = useState()

// console.log(store)
// console.log(isLogin)

function CheckInRecoil() {
    const results= JSON.parse(localStorage.getItem('list'))
    let results1 = []
    results1.push(results)
    console.log(results1)
    for(let i=0; i<results1.length; i++){
      if(results1[i].Email === emailCapture  ){
        window.alert('"Successfully Logged-In"')
        window.open ('http://localhost:3000/activityy')
        console.log(logInStatus)
        setlogInStatus(true)
        
      }else{
        window.alert('Please Enter Valid Details')
      }  
    }
}

function emailValidation(e) {
    setEmailCapture(e.target.value)
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
        if(emailRegixExpression.test(emailCapture)){
            setEmailAlert(true)
        }else{
            setEmailAlert(false)
        }
}
function passwordValidation(e){
    setPasswordCapture(e.target.value)
    const passwordRegixExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
        if(passwordRegixExpression.test(passwordCapture)){
            setPasswordAlert(true)
        } else {
            setPasswordAlert(false)
        }
}

return (
    <div className={login.mainComponent}  >
        <h1 className={login.heading} >Iam LogIn</h1>
       Email: <input type='email' style={{border: emailAlert? '2px solid green' : '2px solid red' }} onChange={emailValidation}   />
       Pw   : <input type='password' style={{border: passwordAlert ? '2px solid green' : '2px solid red'}} onChange={passwordValidation} />
      <button onClick={CheckInRecoil}>Submit</button>
      
    </div>
)
}export default LogIn



