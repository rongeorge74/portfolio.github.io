import React from 'react'
// import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar'
import SocialIcons from '../SocialIcons/SocialIcons'

import {achievements} from './../../assets/achievements'


import './Achievments.css'
const Achievments = ()=>{
    return(
        <div className="section-container">
            <Header Heading="Extra-Curriculars and Achievements" 
            subHeading="Showcasing career milestones alongside diverse extra-curricular pursuits!" />
            <div className="achievements-main">
                <div className="achievements-list">
                    {
                        achievements.map((achievement,i)=>{
                            return(
                                <div className="achievement-name" key={i}>
                                    <ul>
                                        <li className="achiement-title">
                                            {achievement.achievementName}
                                           <p> <i>{achievement.achievementDate}</i></p>
                                        </li>
                                       

                                    </ul>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <SocialIcons/>
            <HorizontalNavbar/>
            {/* <FooterLink 
            phrase="Get in  " 
            link="touch!" 
            toAddress="/contact" /> */}
        </div>
    )
}

export default Achievments