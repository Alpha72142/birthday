import React from 'react'
import './css/Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-main" style={{display:'flex'}}>
                <div className="footer-list" style={{fontSize:"15px"}}>
                    <ul>
                        <li><a href="#">CREATIVE TIM</a></li>
                        <li><a href="#">ABOUT US</a> </li>
                        <li> <a href="#">BLOG</a></li>
                        <li><a href="#">LICENCES</a></li>
                    </ul>
                </div>
                <div className='footer-tag' style={{fontSize:"1.1rem",color:'rgb(83, 83, 83)',fontWeight:'300'}}>
                    <span><i className="bi bi-c-circle" />2022, made with by <span>Creative Tim</span> for a better web.</span>
                </div>

            </div>

        </div>
    )
}

export default Footer
