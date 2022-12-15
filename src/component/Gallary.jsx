import React from 'react'
import './css/Gallary.css'
import One from './portfolio/one.jpg'
import Two from './portfolio/two.jpg'
import Three from './portfolio/three.jpg'
import Four from './portfolio/four.jpg'
import Five from './portfolio/five.jpg'

function Gallary() {
    
    return (
        <div className="gallary-container">
            <div className="galllary-info">
                <h1>Our office is our second home</h1>
                <p>Here are some pictures from our office. You can see the place looks like a palace and is fully equiped with everything you need to get the job done.</p>
            </div>
            <div className="img-container">
                <div className="first-level-imgs">
                <img src={One} alt=""/>
                <img src={Two} alt=""/>
                <img src={Three} alt=""/>
                </div>
                <div className="second-level-imgs">
                    <img src={Four} alt=""/>
                    <img src={Five} alt=""/>
                </div>
                
            </div>

        </div>
    )
}

export default Gallary
