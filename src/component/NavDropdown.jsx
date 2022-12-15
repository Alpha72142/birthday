import React, { useState, useRef, useEffect } from 'react'
import './css/NavDropdown.css'

function NavDropdown() {
    const [isOpenComponent, setIsOpenComponent] = useState(false)
    const [isOpenSection, setIsOpenSection] = useState(false)
    const [isOpenExample, setIsOpenExample] = useState(false)
    const [rotateComponent, setRotateComponent] = useState(0);
    const [rotateSection, setRotateSection] = useState(0);
    const [rotateExample, setRotateExample] = useState(0);

    useEffect(() => {
        console.log('rotate is now: ', rotateComponent);
        console.log('rotate is now: ', rotateSection);
        console.log('rotate is now: ', rotateExample);
    }, [rotateComponent, rotateSection]);


    const handleClickComponent = () => {

        if (rotateComponent === 0) {
            setRotateComponent(rotateComponent + 180)
            setIsOpenComponent(() => !isOpenComponent)
        }
        else if (rotateComponent === 180) {
            setRotateComponent(0)
            setIsOpenComponent(() => !isOpenComponent)
        }

    };
    const handleClickSection = () => {

        if (rotateSection === 0) {
            setRotateSection(rotateSection + 180)
            setIsOpenSection(() => !isOpenSection)
        }
        else if (rotateSection === 180) {
            setRotateSection(0)
            setIsOpenSection(() => !isOpenSection)
        }

    };
    const handleClickExample = () => {

        if (rotateExample === 0) {
            setRotateExample(rotateExample + 180)
            setIsOpenExample(() => !isOpenExample)
        }
        else if (rotateExample === 180) {
            setRotateExample(0)
            setIsOpenExample(() => !isOpenExample)
        }

    };


    return (
        <div className="navdropdown-container" >
            <div className="component-dropdown dropdown-element">
                <button onClick={handleClickComponent} onBlur={handleClickComponent}> Dropdown button <i className="bi bi-caret-down-fill animate-icon" style={{ transform: `rotate(${rotateComponent}deg)`, transition: 'transform .5s' }}></i></button>
                {isOpenComponent && (<div className='navdropdown'>
                    <a className="dropdown-item " href="#"><i className="bi bi-columns"></i>Presentation Page</a>
                    <a className="dropdown-item " href="#"><i className="bi bi-layers-fill"></i> All Components</a>
                    <a className="dropdown-item " href="#"><i className="bi bi-clipboard2"></i> Documentation</a>

                </div>
                )}
            </div>
            <div className="section-dropdown dropdown-element">
                <button onClick={handleClickSection} onBlur={handleClickSection}> Dropdown button <i className="bi bi-caret-down-fill animate-icon" style={{ transform: `rotate(${rotateSection}deg)`, transition: 'transform .5s' }}></i></button>
                {isOpenSection && (<div className='navdropdown'>
                    <a className="dropdown-item " href="#"><i className="bi bi-columns"></i>Presentation Page</a>
                    <a className="dropdown-item " href="#"><i className="bi bi-layers-fill"></i> All Components</a>
                    <a className="dropdown-item " href="#"><i className="bi bi-clipboard2"></i> Documentation</a>

                </div>
                )}
            </div>
            <div className="example-dropdown dropdown-element">
                <button onClick={handleClickExample} onBlur={handleClickExample}> Dropdown button <i className="bi bi-caret-down-fill animate-icon" style={{ transform: `rotate(${rotateExample}deg)`, transition: 'transform .5s' }}></i></button>
                {isOpenExample && (<div className='navdropdown'>
                    <a className="dropdown-item " href="#"><i className="bi bi-columns"></i>Presentation Page</a>
                    <a className="dropdown-item " href="#"><i className="bi bi-layers-fill"></i> All Components</a>
                    <a className="dropdown-item " href="#"><i className="bi bi-clipboard2"></i> Documentation</a>

                </div>
                )}
            </div>

        </div>
    )
}

export default NavDropdown
