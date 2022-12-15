import React from 'react'
import './css/Chatbox.css'
import Dropdown from './Dropdown'



function Chatbox() {

    return (

        <div className="chatbox-container">
            <div className="chatbox-info">
                <h1>Want to work with us?</h1>
                <p> Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will get back to you in a couple of hours.</p>
            </div>
            <div className="wrapper-main">
                <div className="container-main">
                    <div className='row'>

                        <div className="form-group">
                            <input type="text" id="name" className="form-control hover" />
                            <label htmlFor="name" className="ph-area">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="text" id="email" className="form-control hover" />
                            <label htmlFor="email" className="ph-area">Email</label>
                        </div>
                        <div className="">
                           <Dropdown/>
                           
                        </div>
                        
                    </div>
                    <button>LET'S TALK</button>
                    
                </div>

            </div>





        </div>
    )
}

export default Chatbox
