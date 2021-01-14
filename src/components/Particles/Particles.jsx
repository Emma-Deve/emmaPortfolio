import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MUIParticles from 'react-particles-js'

const useStyles = makeStyles((theme) => ({
  particles: {
    position: 'absolute',
    opacity: 0.3,
    width: '100vw',
    height: '100vh',
  },
}))

const Particles = () => {
  const classes = useStyles()
  return (
    <MUIParticles
      className={classes.particles}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          shape: {
            type: 'triangle',
            stroke: {
              width: 5,
              color: '#FF4500',
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0.5,
              sync: false,
            },
          },
        },
      }}
    />
  )
}

export default Particles
