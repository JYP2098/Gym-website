import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Wave = () => {
    return(
        <WaveSvg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 940.354 200.532">
            <motion.path
                initial={{pathLength:0, pathOffset:1}}
                animate={{pathLength:1, pathOffset:0}}
                transition={{duration:1}}
                id="Path_1" data-name="Path 1" 
                d="M956,103S747,413,413,186,22,301,22,301" transform="translate(-18.548 -101.043)" 
                stroke="#12f137" 
                stroke-width="7"/>
        </WaveSvg>

)
}

const WaveSvg = styled.svg`
    position: absolute;
    z-index: 1;
    left:0;
`

export default Wave;