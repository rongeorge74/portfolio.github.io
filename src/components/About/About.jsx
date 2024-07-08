import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import AccordionSummary from "@material-ui/core/AccordionSummary";



import Header from '../Header/Header';
import './About.css'

import AboutImage from '../../assets/about_vector.png'

// import FooterLink from '../FooterLink/FooterLink';
import SocialIcons from '../SocialIcons/SocialIcons';

import { withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar';
const AccordionSummary = withStyles({
  content: {
    flexGrow: 0
  }
})(MuiAccordionSummary);

const About = () =>{
    return(
        <div className="section-container">
            <Header Heading="About me" 
            subHeading="Hello, I'm Ron George, a dedicated Platform Engineer based in Tempe, Arizona. Currently pursuing a Master’s in Computer Science at Arizona State University, I hold a Bachelor’s degree in Computer Engineering from the University of Mumbai. My expertise spans full-stack development, Cloud Computing, DevOps methodologies, and AI/ML technologies. Explore my portfolio to discover how I can transform your ideas into reality." />


            <div className="education-accordian accordian-alignment">
                
                <Accordion className="accordians" style={{backgroundColor: "#84b4f7"}}
                    defaultExpanded={true}>
                    <AccordionSummary className="accordian-summary"
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    >
                        <Typography component={'span'} variant={'body2'} className="Accordian-heading" >
                                <h3>My Educational Details</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography component={'span'} variant={'body2'}>
                            <div className="my-details">
                            <h2 className="about-sub-head">
                                Fr. Conceicao Rodrigues College of Engineering, Mumbai :  <i> {' '}Aug’18 - May’22</i>
                            </h2>
                            <p className="about-deatils">
                                Bachelor of Engineering (Computer)	 <br/>		       	           
                                CGPA: <strong>9.21/10 (First Class with Distinction) </strong> <br/>
                            </p>

                            <h2 className="about-sub-head">
                                Pace Junior Science College, Mumbai : <i>  Jun’16 - Mar’18</i>
                            </h2>
                            <p className="about-deatils">
                                12th Science	 <br/>		       	           
                                Percentage: <strong>92.77%</strong>  <br/>
                            </p>

                            <h2 className="about-sub-head">
                                St. Mary's High School, Dahanu  : <i> Mar’16</i>
                            </h2>
                            <p className="about-deatils">
                                10th 	 <br/>		       	           
                                Percentage: <strong>96.2%</strong>  <br/>
                            </p>
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            <div className="education-accordian">            
                <Accordion className="accordians" style={{backgroundColor: "#84b4f7"}}>
                    <AccordionSummary className="accordian-summary"
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    >
                        <Typography component={'span'} variant={'body2'} className="Accordian-heading">
                        <h3>My Personal Details</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography component={'span'} variant={'body2'}>
                            <div className="my-details personal-details ">
                            <h2 className="about-sub-head ">
                                Name: <i>Ron George</i>
                            </h2>
                            {/* <h2 className="about-sub-head ">
                                    Birth Date: <i>October, 1998</i>
                            </h2> */}
                        
                            {/* <h2 className="about-sub-head ">
                                Gender: <i>Female</i>
                            </h2> */}
                            <h2 className="about-sub-head ">
                                Personal Email: <i>ron.george.336@gmail.com</i>
                            </h2>
                            <h2 className="about-sub-head ">
                            Current Address:<i> Arizona State University, Tempe, Arizona</i>
                            </h2>
                            {/* <h2 className="about-sub-head ">
                                Known Languages: <i>English, Hindi, Malayalam</i>
                            </h2> */}
                            <h2 className="about-sub-head ">
                            Interpersonal Skills: <i>Hard Work, Dedication, Quick learner, Teamwork</i>
                            </h2>
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <SocialIcons/>
            {/* <FooterLink 
            phrase="check out my " 
            link="work experience!" 
            toAddress="/experience" /> */}
              <HorizontalNavbar/>
            <div className="vector-frame">
                <img src={AboutImage} className="about-vector" alt="about" />
            </div>
        </div>
    )
}

export default About