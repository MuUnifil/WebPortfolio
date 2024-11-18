particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff' // Cor das partículas
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 0,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'grab' // Efeito ao passar o mouse sobre as partículas
            },
            onclick: {
                enable: true,
                mode: 'push' // Efeito ao clicar
            }
        },
    },
});
