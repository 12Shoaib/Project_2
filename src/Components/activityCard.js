import {FiCheckSquare} from 'react-icons/fi'
import activitycard from '../Components/activity.module.css'

const ActivityCard = () => {
    return(
        <div className={activitycard.mainComponent}>
             <div className={activitycard.maibody}>
            <div className={activitycard.maincontent}>
            <div className={activitycard.heading1}> <h1>--DAYS --- </h1></div>
            <div className={activitycard.items}><FiCheckSquare /><span className={activitycard.textitem}>Gym Exercise-2hr</span></div>
            <div className={activitycard.items}><FiCheckSquare /><span className={activitycard.textitem}> Zumba classes--1hr</span></div>
            <div className={activitycard.items}><FiCheckSquare  /><span className={activitycard.textitem}> Aerobic--1hr</span></div>
            <div className={activitycard.items}><FiCheckSquare  /><span className={activitycard.textitem}> Diet--protein rich</span></div>
            <div className={activitycard.items}><FiCheckSquare  /><span className={activitycard.textitem}> Rest-- 6hr</span></div>
            </div>                
            </div>
        </div>
    )
}

export default ActivityCard