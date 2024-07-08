import React from 'react'

import './SocialIcons.css'


import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import leetcode from './../../assets/leetcode.png'
// import hackerrank from './../../assets/hackerrank.png'

const SocialIcons = ()=>{
    return(
        <div className="social-icons-container">
                <a href="https://www.linkedin.com/in/rongeorge74" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={linkedin} alt="social" />
                </a>
                <a href="https://github.com/rongeorge74" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={github} alt="social" />
                </a>
                <a href="https://leetcode.com/u/rongeorge74/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={leetcode} alt="social" />
                </a>
                
            </div>
    )
}

export default SocialIcons