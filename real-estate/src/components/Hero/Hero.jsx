import React from 'react'
import './Hero.css'
import CountUp from "react-countup"


const Hero = () => {
  return (
   <section className="hero-wrapper">
    <div className="paddings innerWidth hero-container flexCenter">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Discover<br/> your Dream<br/> Property
            </h1>
          
          </div>
            <div className="flexColStart hero-des">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam sequi, quo quae voluptatibus tenetur ullam, d</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam sequi, quo quae voluptatibus tenetur ullam, d</span>
            </div>
            <div className="flexCenter search-bar">
              <input type="text"/>
              <button className="button">Search</button>
            </div>

        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span className='activeq'><CountUp start={8800} end={9000} duration={5}/><span className="plus">+</span>
              </span>
              <span className='active'>Happy Customers</span>
          </div>
           <div className="flexColStart stat">
            <span className='activeq'><CountUp  end={28} duration={5}/><span className="plus">+</span>
              </span>
              <span className='active'>Active Customers</span>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img  src="/hero-image.png" alt=""/></div>

        </div>
    </div>
   </section>
  )
}

export default Hero
