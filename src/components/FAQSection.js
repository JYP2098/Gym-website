import React from 'react'
import styled from 'styled-components'
import {AnimateSharedLayout} from 'framer-motion'
import { useScroll } from './useScroll';
import {scrollReveal} from "../animation"

import {AboutS} from "../styles"
import Toggle from './Toggle'

const FAQSection = () => {
    const [element, controls] = useScroll()
    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any question? <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How do I Start?">
            
                <div className="answer">
                    <p>afsdaf sgsfg  dfg df</p>
                    <p>uicfebrf uerbcniuer urcbmfuer erugcmign oirmcfcrjn</p>
                </div> 
            
            </Toggle>
            <Toggle title="How do I need?">
            
                <div className="answer">
                    <p>afsdaf sgsfg  dfg df</p>
                    <p>uicfebrf uerbcniuer urcbmfuer erugcmign oirmcfcrjn</p>
                </div>
            
            </Toggle>
            <Toggle title="When do I start?">
           
                <div className="answer">
                    <p>afsdaf sgsfg  dfg df</p>
                    <p>uicfebrf uerbcniuer urcbmfuer erugcmign oirmcfcrjn</p>
                </div>
            
            </Toggle>
            <Toggle title="How do I pay?">
            
                <div className="answer">
                    <p>afsdaf sgsfg  dfg df</p>
                    <p>uicfebrf uerbcniuer urcbmfuer erugcmign oirmcfcrjn</p>
                </div>
            
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(AboutS)`
    display: block;
    span{
        display: block;
    }
    h2{
        font-weight: lighter;
        padding-bottom: 2rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0 rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FAQSection;