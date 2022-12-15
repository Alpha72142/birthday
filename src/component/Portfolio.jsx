import React from 'react'
import './css/Portfolio.css'

function Portfolio() {
    const data = [
        {
            FrontPic: require('./portfolio/Alec Thompson.jpg'),
            Name: 'Alec Thompson',
            Occupation: 'CEO / CO-FOUNDER',
            SmallInfo: 'And I love you like Kanye loves Kanye. We need to restart the human foundation.',
            SocialMedia1: require('./portfolio/twitter.png'),
            SocialMedia2: require('./portfolio/facebook.png'),
            SocialMedia3: require('./portfolio/gmail.png'),

        },
        {
            FrontPic: require('./portfolio/TaniaAndrew.jpg'),
            Name: 'Tania Andrew',
            Occupation: 'DESIGNER',
            SmallInfo: "Don't be scared of the truth because we need to restart the human foundation. And I love you like Kanye loves Kanye.",
            SocialMedia1: require('./portfolio/twitter.png'),
            SocialMedia2: require('./portfolio/basketball.png'),
            SocialMedia3: require('./portfolio/linkedIn.png'),

        },
        {
            FrontPic: require('./portfolio/Christian Mike.jpg'),
            Name: 'Christian Mike',
            Occupation: 'WEB DEVELOPER',
            SmallInfo: "I love you like Kanye loves Kanye. Don't be scared of the truth because we need to restart the human foundation.",
            SocialMedia1: '',
            SocialMedia2: require('./portfolio/facebook.png'),
            SocialMedia3: require('./portfolio/basketball.png'),

        },
        {
            FrontPic: require('./portfolio/Rebecca Stormvile.jpg'),
            Name: 'Rebecca Stormvile',
            Occupation: 'WEB DEVELOPER',
            SmallInfo: "And I love you like Kanye loves Kanye. We really need to restart the human foundation.",
            SocialMedia1: require('./portfolio/gmail.png'),
            SocialMedia2: require('./portfolio/twitter.png'),
            SocialMedia3: require('./portfolio/basketball.png'),

        }


    ]
    const renderCard = (card, index) => {
        return (

            <div key={index}>
                <div className='avatar'><img className="avatar-img" src={card.FrontPic} alt={card.Name} /></div>
                <div className='avatar-body'>
                    <h4 className="avatar-name">{card.Name}</h4>
                    <span className="avatar-occupation">{card.Occupation}</span>
                    <p className="avatar-info">{card.SmallInfo}</p>
                </div>
                <div className="footer-social">
                    <span ><img className="social-logo" src={card.SocialMedia1} /></span>
                    <span ><img className="social-logo" src={card.SocialMedia2} /></span>
                    <span ><img className="social-logo" src={card.SocialMedia3} /></span>
                </div>
            </div>

        )
    }
    return (
        <div className="card-wrapper">
            <div className="info">
                    <h2>We are nerd rockstars</h2>
                    <p>This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
                </div>
            <div className="card-container">
            {data.map((obj, index) => {
                return renderCard(obj, index);
            })}
            </div>
            
        </div>
    )
}

export default Portfolio
