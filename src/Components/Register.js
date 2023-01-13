import register from '../Components/register.module.css'
import {useState , useEffect} from 'react'
import {atomState} from '../Atoms/Atom.js'
import {useRecoilState} from 'recoil'
import {Link} from 'react-router-dom'

const Register = () => {
    const [store , setStore] = useRecoilState(atomState)
    const [local, setLocal] = useState([])
    const [nameCapture, setNameCapture] = useState()
    const [emailCapture, setEmailCapture] = useState()
    const [passwordCapture, setPasswordCapture] = useState()
    const [nameAlert, setNameAlert] = useState('')
    const [emailAlert, setEmailAlert] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')

    useEffect(() => {
      }, [store]);        

    function AddDataToRecoil(e) {
        e.preventDefault()
        const Data={
        Name: nameCapture,
        Email: emailCapture,
        Password: passwordCapture,
        isLogIn :false, 
        flag : {
            isSubscribed : false,
            plan15 : false, 
            plan30 : false
        },
        }
        setStore([...store, Data])
        setLocal(localStorage.setItem('list' ,  JSON.stringify(Data)))
        console.log(store, 'Stored in recoil')
        console.log(local , 'stored on local')

        if(emailAlert === true && passwordAlert===true && nameAlert ===true){
            window.alert("Registered Successfully")
        }             
    }

    function nameValidation(e) {
       setNameCapture(e.target.value) 
       const nameRegixExpression =/^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/ ;
       if(nameRegixExpression.test(nameCapture)){
        setNameAlert(true)
       }else{
        setNameAlert(false)
       }
    }

    function emailValidation(e) {
        setEmailCapture(e.target.value)
        console.log(emailCapture)
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
        <div className={register.mainComponent}>
           <h1>No Excuse, Register Now !!</h1> 
        <div>
            <br/>
            <form className={register.formComponents}>
            <input className={register.inputBox} placeholder='@Your Name' type='text' style={{border: nameAlert ? '2px solid green' : '2px solid red'}}  onChange={nameValidation}  />
            <input className={register.inputBox} placeholder='@Email Adress' type='email' style={{border: emailAlert ? '2px solid green' : '2px solid red'  }}  onChange={emailValidation} />
            <input className={register.inputBox} placeholder='@Password' type='password' style={{border: passwordAlert ? '2px solid green' : '2px solid red'  }}  onChange={passwordValidation} />
            <div className={register.buttonComponent}>
            <button className={register.registerButton}onClick={AddDataToRecoil}>Register</button>            
            <Link className={register.home} to='/' ><buuton className={register.homeButton} >Home</buuton></Link>
            <Link clasName={register.login} to='/login'><button className={register.loginButton}>LogIn</button></Link>
            </div>
            </form>
            {console.log(store)}
        </div>
        </div>
        
    )
}

export default Register