import React from 'react'
import One from './One'
import Three from './Three'
import Two from './Two'

import { Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function ReactSpring() {
  return (
    <div>
        <Parallax pages={3}>
            <ParallaxLayer speed={1}>
                <One />
            </ParallaxLayer>
            <ParallaxLayer>
                <div style={{height:"50px", width:"50px", backgroundColor:"green"}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={.5}>
                <Two />
            </ParallaxLayer>
            <ParallaxLayer offset={2}>
                <Three />
            </ParallaxLayer>
        </Parallax>
    </div>
  )
}
