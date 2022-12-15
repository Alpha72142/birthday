import React, { useState } from 'react'
import './css/Dropdown.css'

function Dropdown() {
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("")
    const options = ["I'm a designer", "I'm a developer", "I'm a Helo"]

    const handle = () => {
        if (selected == "") {
            let title = "I'M A DESIGNER";
            return title
        }
        else {
            return selected
        }
    }

    return (
        <div className="dropdown-select-main">
            <div className="dropdown-btn" selected={(selected)} onClick={e => { setIsActive(!isActive) }} > {handle()} <i className="bi bi-caret-down-fill" /></div>
            {isActive && (
                <div className="dropdown-content"  >
                    {options.map((option, index) => (
                        <div onClick={e => {
                            setSelected(option)
                            setIsActive(false)

                        }}
                            key={index}
                            
                            className="dropdown-item" >{option}</div>
                    ))}


                </div>
            )}

        </div>
    )
}

export default Dropdown
