import activity from '../Components/activity.module.css'
import {Link} from 'react-router-dom'
import { twenty , thirty } from '../Atoms/Atom'
import { useRecoilValue } from 'recoil'
import ActivityCard from './activityCard'

const Activity = () => {
    const twentyDaysSubscription = useRecoilValue(twenty) 
    const thirtyDaysSubscription = useRecoilValue(thirty)  

    return(
        <div className={activity.mainComponent}>
            <h1> Iam Activity Page</h1>
            {/* <h2> Please Subscribe First</h2> */}
            <Link className={activity.home} to='/' ><buuton className={activity.homeButton} >Home</buuton></Link>
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />  
        </div>
    )
}
export default Activity