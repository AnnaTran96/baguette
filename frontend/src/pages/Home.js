import React from 'react'
import { Link } from 'react-router-dom'
import './styles/HomeStyle.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-headings">
                <h1 className="home-heading">Vieguette's</h1>
                <h4 className="home-sub">London</h4>
            </div>
            <img src="https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="banner" alt="Banner"/>
            <div className="icons">
            <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a><br/>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
            <div className="content">
                <h1 className="open">We are open!</h1>
                <ul className="opening-hours">
                    <li>Opening Hours:</li>
                    <li>Mon - Fri: 12pm - 2:30pm 5:30pm - 10:30pm</li>
                    <li>Sat: 11pm - 10:30pm</li>
                    <li>Sun: 12:30pm - 9pm</li>
                </ul>
                <p className="reservation-number">Reservation number: <br/><span className="phone-number">+44 2074596278</span></p>
                <p className="email">baguettes@vieguettes.com</p>
                <div className="about-menu">
                    <div className="about-info-container">
                        <p className="about-content">Authentic, delicious and healthy baguettes prepared freshly every day. It is our goal to combine the best ingredients to create these authentic baguettes. Vieguette's is th first baguette store in London to be serving a combination of different baguettes from different cuisines.</p>
                        <Link to="/about" className="read-more">Read More</Link>
                    </div>
                    <div className="home-menu-container">
                        <Link to="/menu"><img src="https://images.unsplash.com/photo-1530548091131-36336084c705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Baguettes" className="menu-img"/></Link>
                        <Link to="/menu" className="menucard-name"><h2 >Menu</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;