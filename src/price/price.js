import price1 from '../price/price1.module.css'
import { FiCheckCircle } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import {twenty , thirty , flag} from '../Atoms/Atom'
import { useRecoilState } from 'recoil';

export default function Price() {
  const [subscribeTwentyDays , setSubcribeTwentyDays] = useRecoilState(twenty)
  const [subscribeThirtyDays , setSubcribeThirtyDays] = useRecoilState(thirty)
  const [flagging , setFlagging] = useRecoilState(flag)

function twentyDays () {
  setSubcribeTwentyDays(true)
  flag1()
  console.log(flagging)
}
function thirtyDays () {
  setSubcribeThirtyDays(true)
  flag2()
}
function flag1 () {
  setFlagging(true)
}
function flag2() {
  setFlagging(true)
}

  return (
    <div className={price1.priceComponent}>
    <section className={price1.priceComparison}>
      <div className={price1.priceColumnPopular}>
        <div className={price1.top}>Day Pass</div>
        <div className={price1.header}>
          <div className={price1.price}>
            <div className={price1.dollarSign}>$</div>
            <div className={price1.numbers}>40</div>
            <div className={price1.pass}>/pass</div>
          </div>
        </div>

        <div className={price1.features}>
          <p>
            <FiCheckCircle size=".75em" /> 15 Day Pass
          </p>
          <p>
            <FiCheckCircle size=".75em" /> Free Gym Access
          </p>
          <p>
            <FiCheckCircle size=".75em" /> 24 Hour Access
          </p>
          {subscribeTwentyDays ? <button className={price1.btn}>Subscribed</button> : 
          <button onClick={twentyDays} className={price1.btn}>Subscribe</button>}
        </div>
      </div>
      <div className={price1.priceColumnPopular}>
        <div className={price1.top}>Month to Month</div>
        <div className={price1.header}>
          <div className={price1.price}>
            <div className={price1.dollarSign}>$</div>
            <div className={price1.numbers}> 90</div>
            <div className={price1.pass}>/Month</div>
          </div>
        </div>
        <div className={price1.features}>
          <p>
            <FiCheckCircle size=".75em" /> $99 Joining Fee
          </p>
          <p>
            <FiCheckCircle size=".75em" /> No Contract
            <p />
          </p>
          <p>
            <FiCheckCircle size=".75em" /> Free Gym Access
          </p>
          <p>
            {" "}
            <FiCheckCircle size=".75em" /> 1 Group Class Included
          </p>

          <p>
            <FiCheckCircle size=".75em" /> 24 Hour Access
          </p>
        </div>

        {subscribeThirtyDays ? <button className={price1.btn}>Subscribed</button> : 
          <button onClick={thirtyDays} className={price1.btn}>Subscribe</button>}
      </div>
      <div className={price1.member}>
        <p className={price1.para}>Membership</p>
        <h4> From punch Pass to Monthly or Annual</h4>
        <h6 style={{ color: "grey" }}>
          <p>
            At the Gym base,we Offer a wide range of membership with options to
            suit
            <br></br>
            every budget.Everything From One Day Pass,Punch pass to monthly or
            <br></br>
            Annual prepaid memberships.What's more,we won't tie with you in to a
            long
            <br></br>
            term contract,giving you greater flexibility.
          </p>
        </h6>
        <h5>Each Plan included</h5>
        <div className={price1.icon}>
          <br></br>
          <HiArrowLongRight size="1.5em" color="green" />
          {"the best equipment global brand"}
          <br></br>
          <HiArrowLongRight size="1.5em" color="green" />{" "}
          {"the gym is open 24 hours a day,7 days a week"}
          <br></br>
          <HiArrowLongRight size="1.5em" color="green" />{" "}
          {"Two safe payment methods"}
          <br></br>
          <HiArrowLongRight size="1.5em" color="green" />
          {" Group Fitness classes in the price of the subscription"}
          <br></br>
          <HiArrowLongRight size="1.5em" color="green" />{" "}
          {" No long term contract period"}
        </div>
      </div>
      ;
    </section>
    </div>
  );
}
