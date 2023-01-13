import { Link } from "react-router-dom";
import navbar from'../Components/navBar.module.css'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'

const Navbar = () =>  {
    const[show , setShow] = useState(true)

    function Toggle() {
        setShow(!show)
        console.log(show)   
    }
    return (
        <div className={navbar.MainComponent}>
         {show ? <span onClick={Toggle} className={navbar.barButton}><FaBars /></span> : <span onClick={Toggle} className={navbar.barButton}><FaBars /></span>}   
        <nav className={navbar.navComponent}>                     
        <Link className={navbar.logo} to='/' > Gym</Link>    
        <span className={navbar.linkerComponent} id={show ? null : navbar.buttonId}>    
        <Link className={navbar.linker} to='/' > Home</Link>        
        <Link className={navbar.linker} to='/aboutus' > About Us</Link>
        <a href='#team' className={navbar.section}  >Trainers</a>
        <a href='#programs' className={navbar.section}  >Programs</a>
        {/* <Link className={navbar.linker} to='/classes' > Classes</Link> */}
        <a href='#price' className={navbar.section}  >Price</a>
        <Link className={navbar.button} to='/register' > <button className={navbar.buttonJoin}> JoinUs</button></Link>
        
        </span>
        </nav>                
        </div>
    )
}

export default Navbar



