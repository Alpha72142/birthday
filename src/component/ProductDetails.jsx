import React from 'react'
import './css/PoductDetails.css'

function ProductDetails() {
    const data = [
        {
            Logo: require('./portfolio/draw.png'),
           
            Attribute: '1. Design',
            SmallInfo: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.",
          

        },
        {
            Logo: require('./portfolio/fix.png'),  
            Attribute:  '2. Develop',
            SmallInfo: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
           

        },
        {
            Logo: require('./portfolio/edit.png'),
            Attribute:  '3. Make Edits',
            SmallInfo: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
        
        },
    ]
    const renderCard = (card, index) => {
        return (

            <div className="main-wrapper" key={index}>
                <div className='Attribute-container'>
                    <img className="attribute-img" src={card.Logo} alt={card.Name} />
                </div>
                <div className='attribute-body'>
                    <h4 className="attribute-title">{card.Attribute}</h4>
                    <p className="attribute-info">{card.SmallInfo}</p>
                    <a  className="more-info" href="#" >Find more...</a>
                </div>
               
            </div>

        )
    }
    return (
        <div className="attribute-card-wrapper">
            <div className="details">
                    <h2>We build awesome products</h2>
                    <p>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</p>
                </div>
            <div className="attribute-card-container">
            {data.map((obj, index) => {
                return renderCard(obj, index);
            })}
            </div>
            
        </div>
    )
}


export default ProductDetails

