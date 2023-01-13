import about from '../Components/about.module.css'
import CarouselGym from '../carousel/CarouselGym.js'
import Team from '../Trainer/Team.js'
const AboutUs = () => {
    return (
        <div className={about.mainComponent}>
            
            <div className={about.Container}>
            <div className={about.child}>
            <iframe width="580" height="355" src="https://www.youtube.com/embed/HnoPHqrdXQ8" title="I'M ALONE - Gym Motivation 😔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className={about.child}>
            <p className={about.pTag}>It’s easy to get bored if you’re running on a treadmill or banging weights day after day.
             Try to make exercising fun. You can volunteer to walk dogs around your neighborhood, or you
             can go hiking through the woods. Your local community center probably has some dance classes 
             that will not only help you stay healthy,but will also be a blast.<span><br/><button onClick={() => window.alert("Clicked From About Us")} className={about.learnButton}>Learn More</button></span> </p>
          
            </div>                        
            </div>
            <div className={about.anotherVideo}>
            <iframe width="580" height="355" src="https://www.youtube.com/embed/oN8gF4JXUCw" title="CHOOSE YOUR LIFE - Gym Motivation 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className={about.paragraph}>            
             <h2 className={about.heading}>Why Choose Us ?</h2> 
             <ul>
             <li><h2>Consultations With Expert</h2></li>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit commodi veniam expedita eum ipsum quaerat nemo labore.</p>   
             <li><h2>Best Workout Facility</h2></li> 
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit commodi veniam expedita eum ipsum quaerat nemo labore. </p>  
            </ul> 
             </div>
             <div id='programs'> 
            <CarouselGym />
            </div>
            <div id='team'>
            <Team />
            </div>     
        </div>
    )
}
export default AboutUs