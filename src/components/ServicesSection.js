import React from 'react';
import equipments from "../img/equipments.svg"
import diet from "../img/diet.svg"
import kick from "../img/kickboxing.svg"
import zumba from "../img/zumba.svg"
import gym2 from '../img/gym2.png'
import {scrollReveal} from "../animation"

import styled from 'styled-components'

import {AboutS, Description, Image,Hide} from "../styles"
import { useScroll } from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll()
    return(
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}> 
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={equipments} />
                            <h3>Highly equipped</h3>
                        </div>
                        <p>isdajhfb iwucemfio ifowmcjnfij fmgkl</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diet} />
                            <h3>Diet plan</h3>
                        </div>
                        <p>isdajhfb iwucemfio ifowmcjnfij fmgkl</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={zumba} />
                            <h3>Zumba classes</h3>
                        </div>
                        <p>isdajhfb iwucemfio ifowmcjnfij fmgkl</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={kick} style={{color: 'green'}}/>
                            <h3>Kickboxing classes</h3>
                        </div>
                        <p>isdajhfb iwucemfio ifowmcjnfij fmgkl</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={gym2} />
            </Image>
        </Services>
    )
}

const Services = styled(AboutS)`
    h2{
        padding-bottom: 2rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
            justify-content: center;
        }
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    img{
        width: 15%;
        height: 15%;
    }
    h3{
        margin-left: 1.5rem;
        background: white;
        color: black;
        padding: 1rem;
        border-radius: 8px;
    }
`

export default ServicesSection;