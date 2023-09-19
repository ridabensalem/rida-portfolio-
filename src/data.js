// importing Projects screenShots 
import portfolioPath from './Images/Portfolio.gif';
import moviesPath from './Images/movie_app.jpeg';
import spacePath from './Images/space_traveler.jpeg';
import countDown from './Images/countdown.jpeg';
import todo from './Images/to_do_list.png';
import moroccoMagic from './Images/Morooco_magic.png';
// Projects data
export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'The Personal Portfolio is a dynamic web application built with React and TailwindCSS that serves as a showcase of my professional journey. It offers a clean and modern design, providing visitors with a simple yet engaging introduction to who I am, my experience, projects, and skills.',
    image: portfolioPath,
    tags: ['React', 'Css', 'TailwindCss'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/ridabensalem/rida-portfolio-'
  },
  {
    id: 2,
    title: 'Movies App',
    description: 'Movie app is a website that shows the different lists of movies depending on a chosen category and gives you the ability to add a like, and the number of, likes, a comment, reserve a movie, and add a comment for a selected movie. Built Using API and Javascript Webpack. and HTML CSS',
    image: moviesPath,
    tags: ['JavaScript', 'Webpack', 'Html', 'Css'],
    liveUrl: 'https://candid-malasada-97375b.netlify.app/#',
    sourceUrl: 'https://github.com/ridabensalem/Js-capstone-'
  },
  {
    id: 3,
    title: 'Space Travelers Hub',
    description: 'Space Traveler is a React web application designed to provide users with an immersive experience of space exploration. This app allows users to explore a list of rockets dragons, and missions, enabling them to reserve or cancel their bookings, users can join or leave missions, and their reserved items',
    image: spacePath,
    tags: ['React', 'Css', 'Redux'],
    liveUrl: 'https://peppy-bublanina-be7cae.netlify.app/',
    sourceUrl: 'https://github.com/ridabensalem/space-travelers-hub'
  },
  {
    id: 4,
    title: 'countDown Timer',
    description: 'The New Year Countdown Timer is a web application built with HTML, CSS, and JavaScript that counts the time remaining until the next year. This interactive countdown timer displays the number of days, hours, and minutes.',
    image: countDown,
    tags: ['HTML ', 'css', 'JavaScript'],
    liveUrl: 'https://ridabensalem.github.io/Year-countdown-timer-/',
    sourceUrl: 'https://github.com/ridabensalem/Year-countdown-timer-'
  },
  {
    id: 5,
    title: 'React to do list ',
    description: 'The React To-Do List is a web application designed to help users effectively manage their tasks and activities. Built with React and Vite, this application provides a seamless and intuitive user interface for adding, checking, and deleting tasks.',
    image: todo,
    tags: ['React', 'Vite ', 'Css'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/ridabensalem/React-to-do-list-'
  },
  {
    id: 6,
    title: 'Morocco Magic ',
    description: 'Morocco Magic is a static website that serves as a captivating representation of the tourism experiences in Morocco using dynamic Js to load some section in the projects . Built with HTML, CSS, and JavaScript.',
    image: moroccoMagic,
    tags: ['HTML', 'Css ', 'JavaScript'],
    liveUrl: 'https://ridabensalem.github.io/Morocco-Magic/',
    sourceUrl: 'https://github.com/ridabensalem/Morocco-Magic'
  }
];
//skills 
export const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'MySQL', 'Sass', 'PHP', 'TailwindCss', 'WebPack', 'Redux', 'Jest', 'Git', 'GitHub','Ruby','PostgreSQL'];
