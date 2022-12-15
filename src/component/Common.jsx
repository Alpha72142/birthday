import React, {useState } from 'react'
import Navbar from './Navbar'
import './css/Common.css'
import Details from './Details'
import Portfolio from './Portfolio'
import ProductDetails from './ProductDetails'
import Gallary from './Gallary'
import Chatbox from './Chatbox'
import Footer from './Footer'


function Common() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    
    return (
       
        <div className="about">
            <div>
                <div className={navbar ?'navbar-comon active' : 'navbar-comon'}>
                    <Navbar />
                </div>
                <div className="first-info"  >
                    <p className="header">About Us</p>
                    <p className="detail">Meet the amazing team behind this project and find out more about how we work</p>
                    <div >
                        <div className="card-main" >
                            <Details />
                            <Portfolio />
                            <ProductDetails />
                            <Gallary />
                            <Chatbox />
                        </div>
                        <Footer />
                    </div>
                </div>

            </div>
        </div>
    
    )
}

export default Common
