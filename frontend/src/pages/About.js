import React from 'react'
import './styles/AboutStyle.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-img-container">
                <img src="https://images.unsplash.com/flagged/photo-1561668038-2742fcef75d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Baking" className="baking-img"></img>
                <img src="https://images.unsplash.com/photo-1599819055803-717bba43890f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Baguette" className="baguette-img"></img>
                <img src="https://images.unsplash.com/photo-1456765447332-d79762cdcbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80" alt="Baguette" className="baguette-img2"></img>
            </div>
            <h1 className="about-heading">About Us</h1>
            <p className="about-text">Our aim is to deliver food that makes everyone happy.</p>
            <p className="about-text"> We do our best to reflect this with authentic, delicious and healthy food that we prepare freshly everyday.</p> 
            <p className="about-text">Our food consists of a variety of baguette flavours from different cuisines around the world.</p>
            <p className="about-text"> We use regional ingredients so we can deliver the best flavours for our customers.
            </p>
            <p className="about-text">We opt out on using ingredients that have high sodium.</p>
            <p className="about-text"> We want to create baguettes that have less sodium and more nutrients which makes the baguettes more lighter, easy to digest but filling at the same time.</p>
            <p className="about-text">All our baguettes are made with white flour imported from Italy.</p>
            <p className="about-text"> We directly buy our ingredients from several small independent producers and we only use the best local suppliers.
            </p>
            <p className="about-text">Every single baguette is handmade with love and patience by our bakers.</p> 
            <p className="about-text">Our menu is suitable for vegetarians.</p>
            <p className="about-text">Special variations and dairy free options are available upon request.
            </p>
        </div>
    )
}

export default About;