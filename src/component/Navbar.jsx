import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import 'primeicons/primeicons.css';

function Navbar() {
    
    
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
      console.log('rotate is now: ', rotate);
    }, [rotate]);
  
    const handleClick = event => {
        if(rotate === 0){
            setRotate(rotate + 180)
        }
        else if( rotate === 180){
            setRotate(0)
        }
    };
    
    // const handleClicked = event => {
    //     setRotate(rotate - 180) }
   
   

    return (
       <div >
        <nav className="navbar navbar-expand-lg navbar-light navbar-container ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{position:'sticky'}}>
                <ul className="navbar-nav ml-auto list ">
                    <li className="nav-item dropdown">
                        <a className="nav-link"
                            onClick={handleClick}
                            onBlur={handleClick}
                            style={{color:"white"}}
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            > <i className="bi bi-grid-3x3-gap-fill front-icon" /> COMPONENTS <i className="bi bi-caret-down-fill rotate" style={{transform:`rotate(${rotate}deg)`}}></i></a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item bi bi-columns" href="#"> Presentation Page</a>
                            <a className="dropdown-item bi bi-layers-fill" href="#"> All Components</a>
                            <a className="dropdown-item bi bi-clipboard2" href="#"> Documentation</a>
                        </div>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link"
                            style={{color:"white"}}
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"><i className="bi bi-distribute-vertical"></i> SECTIONS <i className="bi bi-caret-down-fill rotate" /></a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item bi bi-toggles" href="#"> Headers</a>
                            <a className="dropdown-item bi bi-wrench" href="#"> Features</a>
                            <a className="dropdown-item bi bi-list-ul" href="#"> Blogs</a>
                            <a className="dropdown-item bi bi-people-fill" href="#"> Teams</a>
                            <a className="dropdown-item bi bi-clipboard-data" href="#"> Projects</a>
                            <a className="dropdown-item bi bi-coin" href="#"> Price</a>
                            <a className="dropdown-item bi bi-chat-left-text" href="#"> Testimonials</a>
                            <a className="dropdown-item bi bi-telephone-fill" href="#"> Contacts</a>
                    
                        </div>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link"
                            style={{color:"white"}}
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"><i className="bi bi-distribute-horizontal"></i> EXAMPLE <i className="bi bi-caret-down-fill rotate" /></a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"><i className="bi bi-bank"></i> About Us</a>
                            <a className="dropdown-item " href="#"><i className="bi bi-list-task "></i> Blog Post</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-columns-gap"></i> Blog Posts</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-geo-alt-fill"></i> Contact Us</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-distribute-vertical"></i> Landing page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-fingerprint"></i> Login Page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-currency-dollar"></i> Pricing Page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-basket3-fill"></i> Shopping Cart</a>
                            <a className="dropdown-item" href="#"> <i className="bi bi-shop"></i> Ecommerce Page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-cart3"></i> Product Page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-person-circle"></i> Profile Page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-person-plus"></i> Signup Page</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-person-plus"></i> Error Page</a>
                          
                        </div>

                    </li>
                    <li className="nav-item dropdown buy-now">
                        <a className="nav-link" href="#">
                            <i className="bi bi-cart-fill"></i> BUY  NOW</a>
                    </li>

                </ul>
            </div>
        </nav>
        </div>

    )
}

export default Navbar

