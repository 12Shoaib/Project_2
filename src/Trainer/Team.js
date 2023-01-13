import React from "react";
import {Cardimg} from '../Trainer/Images';
import styles from '../Trainer/team.module.css'
import {Link} from 'react-router-dom'
  
function Team(){

    return(

        <>
        

        <div className={styles.container}>

           <div>
         <span className={styles.heading1}><b>Meet Our Team</b></span>
         <hr width="50px;" 
        size="1" color="green"/>
           </div> 
         
           <div>
           <p className={styles.mypara}> We are a team of experienced people, nutrition,sportsand fitness passionate experts with talent <br/>
                          <center>and knowledge unsurpassed in the industry. Get to know us</center></p>
           </div>

           <div className={styles.peers}>
          

           
           {Cardimg.map(([img1,text1,work1])=>{
                return(
                  <div className={styles.card}>
                 
                <img img className={styles.myimg} src={img1}/><h4>&nbsp;{text1}</h4><i>&nbsp;{work1}</i>
                </div>
              )
           })}

          
        </div>
            

        <div className={styles.button1}>
        <Link to= '/wholeteam' > <button className={styles.wholeButton}>SEE THE WHOLE TEAM</button> </Link>
        
        </div>

        </div>
        
        </>

    )
    
}
export default Team;