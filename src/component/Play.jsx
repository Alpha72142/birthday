import React, { useEffect, useState } from 'react'
import './css/Play.css'

function Play() {
    const [rotate, setRotate] = useState(0);
    const [rotateOne, setRotateOne] = useState(30)
    const [rotateTwo, setRotateTwo] = useState(60)
    const [rotateThree, setRotateThree] = useState(90)
    const [rotatefour, setRotatefour] = useState(120)
    const [rotatefive, setRotatefive] = useState(150)
    

    // useEffect(() => {
    //     handleClick()
    // }, [1000])

    const handleClick = () => {


        for (let i = 0; i <= 360; i++) {
            setRotate(prev => prev + i)
            setRotateOne(prev => prev + i)
            setRotateTwo(prev => prev + i)
            setRotateThree(prev => prev + i)
            setRotatefour(prev => prev + i)
            setRotatefive(prev => prev + i)
        }





    };



    return (
        <div className="wrapper-main">
            
            <div className="main-container">
            <a className="dash-in-in" style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${-rotate}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${rotateOne}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${-rotateOne}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${rotateTwo}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${-rotateTwo}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${rotateThree}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${-rotateThree}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${rotatefour}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${-rotatefour}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${rotatefive}deg)`, transition: 'transform 500s' }}></a>
            <a className="dash-in-in" style={{ transform: `rotate(${-rotatefive}deg)`, transition: 'transform 500s' }}></a>
               
                
                <div onClick={handleClick} className="circle-out">
                    
                    <div className="circle-in">
                        <div className="dash-in-one" style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 500s' }}></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${-rotate}deg)`, transition: 'transform 500s' }}></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${rotateOne}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${-rotateOne}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${rotateTwo}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${-rotateTwo}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${rotateThree}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${-rotateThree}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${rotatefour}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${-rotatefour}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${rotatefive}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="dash-in-one" style={{ transform: `rotate(${-rotatefive}deg)`, transition: 'transform 500s' }}><div className="circle-in-out"></div></div>
                        <div className="circle-in-in"></div>
                    </div>
                </div>
            </div>
   
        </div>
    )
}

export default Play
