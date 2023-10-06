import React from 'react'
import Moi from '../assets/moiBG.jpg';


const Card = () => {
  return (
    <section className='card__container'>
        <div className='card__content'>
           <img src={Moi} alt="Moi" />

           <div className='card__content1'>
             <h1>Tchalim Sam Tanguy</h1>
             <p className='card__status'>Frontend Developer</p>
             <span>kirinryu.dev.website</span>

             <div className='card__contact'>
                <button className='email'><i class="fa-solid fa-square-envelope"></i> Email</button>
                <button className='linnk'><i class="fa-brands fa-linkedin"></i> LinkedIN</button>
             </div>

             <div className='card__apropos'>
                <h2>About</h2>
                <p className='text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h2>Interests</h2>
                <p className='text'>I like .Food .Music .Reader .Internet .Entrepreneur .Travel .geek .Anime culture .Swords .Coffee fanatic.</p>

             </div>

             <div className='card__social'>
                <ul className='social__container'>
                    <li><a href=""><i class="fa-brands fa-square-twitter i" ></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-facebook i"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-instagram i"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-github i" ></i></a></li>
                </ul>
             </div>
           </div>
        </div>
    </section>
  )
}

export default Card