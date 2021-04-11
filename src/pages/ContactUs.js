import React from 'react'
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim, slider,sliderContainer} from '../animation'
import styled from 'styled-components'

const ContactUs = () => {
    return(
        <ContactStyle style={{background:"#ffffff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch!</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px){
           padding: 2rem;
           font-size: 1rem;
        }

`
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1300px){
           margin-top: 5rem;
        }
`
const Hide = styled.div`
    overflow: hidden;
`
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`
const Frame1 = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 10%;
    left: 0;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`
export default ContactUs;