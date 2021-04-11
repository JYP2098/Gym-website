import React from 'react';
import gym from "../img/gym.png";
import {AboutS, Description, Image,Hide} from "../styles"
import {motion} from 'framer-motion'
import {titleAnim, fade, imgAnim} from "../animation"
import Wave from './Wave';

const About = () => {

    return(
        <AboutS>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>you achive your dream <span>physique</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us to start building your physique today</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image variants={imgAnim}>
                <motion.img variants={imgAnim} src={gym}/>
            </Image>
            <Wave />
        </AboutS>
    )
}

export default About;