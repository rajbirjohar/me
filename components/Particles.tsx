import Particles from 'react-tsparticles'

const ParticlesCanvas = () => {
  const particlesInit = (main) => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 0.9,
              size: 40,
            },
          },
        },
        particles: {
          color: {
            value: '#d5dbe3',
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'bottom',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesCanvas
