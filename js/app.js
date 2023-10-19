particlesJS({
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#044cac",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#2b68bc",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "bubble",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});


// Función para actualizar el contador con duración de 3 segundos para llegar a los límites de 6000 y 15000
function updateCounterWithSpeed(element, limit, durationInSeconds, step) {
  const totalSteps = limit;
  const stepsPerSecond = totalSteps / durationInSeconds;
  let count = 0;
  let interval;

  // Configurar el observer para detectar la visibilidad del elemento
  const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
          if (element.id === 'counter1') {
              interval = setInterval(() => {
                  if (count < limit) {
                      count += step;
                      element.textContent = count;
                  } else {
                      clearInterval(interval); // Detener el contador cuando llegue al límite
                  }
              }, 1000); // Contar de 1 en 1 por segundo
          } else {
              interval = setInterval(() => {
                  count += stepsPerSecond;
                  if (count >= limit) {
                      count = limit;
                      clearInterval(interval); // Detener el contador cuando llegue al límite
                  }
                  element.textContent = Math.floor(count);
              }, 1000 / stepsPerSecond); // Calcular la velocidad para que dure 3 segundos
          }
      } else {
          clearInterval(interval); // Detener el contador si el elemento ya no está visible
      }
  });

  observer.observe(element);
}

// Obtén los elementos del contador y llama a la función con sus límites y duraciones respectivas
const counter1 = document.getElementById('counter1');
updateCounterWithSpeed(counter1.querySelector('.counter-value'), 23, 8, 1); // Contar de 1 en 1, duración: 3 segundos para llegar a 23

const counter2 = document.getElementById('counter2');
updateCounterWithSpeed(counter2.querySelector('.counter-value'), 6000, 150, 20); // Contar más rápido, duración: 3 segundos para llegar a 6000

const counter3 = document.getElementById('counter3');
updateCounterWithSpeed(counter3.querySelector('.counter-value'), 15000, 270, 50); // Contar más rápido, duración: 3 segundos para llegar a 15000
