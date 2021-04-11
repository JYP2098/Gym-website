import React from 'react'
import ath from '../img/ath.png'
import ath2 from '../img/ath2.png'
import ath3 from '../img/ath3.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {pageAnimation, fade, imgAnim, lineAnim, slider, sliderContainer} from '../animation'
import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
    const [element, controls] = useScroll()
    const [element2, controls2] = useScroll()
    return(
        <Work style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athelete">
                    <Hide>
                    <motion.img variants={imgAnim} src={ath} />
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={fade} ref={element} animate={controls} initial="hidden">
                <h2>The athlete 2</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athelete2">
                    <img src={ath2} />
                </Link>
            </Movie>
            <Movie variants={fade} ref={element2} animate={controls2} initial="hidden">
                <h2>The athlete 3</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athelete3">
                    <img src={ath3} />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
            padding: 2rem 2rem;
        }
`
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;
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

export default OurWork;