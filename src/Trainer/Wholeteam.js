import React from "react";
import {Cardimg} from '../Trainer/wholeteamimages'
import styles from '../Trainer/wholeteam.module.css'

const Wholeteam =() => {

    return (
        <div className={styles.mainComponent}>
            <div className={styles.wholebody}>

<div className={styles.container}>
           <div>
            <h1>
         <span className={styles.heading1}>Whole Team</span>
         <hr width="50px;" 
        size="1" color="gray"/></h1>
           </div>
<div className={styles.peers}>

{Cardimg.map(([img1,text1,work1])=>{
     return(
       <div className={styles.card}>
      
     <img img className={styles.myimg} src={img1}/><h6>&nbsp;{text1}</h6><i>&nbsp;{work1}</i>
     </div>
   )
})}


</div>
 </div>

 </div> 
        </div>
    )
}
export default Wholeteam