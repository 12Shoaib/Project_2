import home from '../Components/home.module.css'
import {Link} from 'react-router-dom'
import Footer from '../footer/Footer'
import CarouselGym from '../carousel/CarouselGym.js'
import Team from '../Trainer/Team.js'
import Price from '../price/price'
import { useRecoilValue } from 'recoil'
import {isLogin , flag } from '../Atoms/Atom'


const Home = () => {
   const logInStatus = useRecoilValue(isLogin)
   const SubscribeStatus = useRecoilValue(flag)
       return (
        <div className={home.mainComponent}>
            <div className={home.headingdiv}> <h1 className={home.heading}> "If You Don't Make Time For Exercise,<br/> You'll Probably Have To Make Time For Illness<br/>Stay Fit And Healthy !!"</h1></div>
           {logInStatus ? SubscribeStatus ?<Link  to='/activity' ><button className={home.buttonLink}>Activity </button></Link> : <a href='#price' className={home.buttonLink}  >Get Started</a>  : <Link  to='/register' ><button className={home.buttonLink}> Join With Us</button></Link>  }
            
            <br/>      
            <br/>
            <div id='programs'> 
            <CarouselGym />
            </div>
            <div id='team'>
            <Team />
            </div>  
            <div id='price'>   
            <Price />
            </div>        
            <Footer />
            
            
            
        </div>
    )
}
export default Home