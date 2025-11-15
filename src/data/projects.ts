const skills = {
  html: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  css: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
  js: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  node: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  react: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  redux: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  mongo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
  express: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  chakra: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg',
  postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  git: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
}

const projects = [
  {
    title: 'Dream Park (E-commerce)',
    description:
      'Dream Park is a unique lifestyle e-commerce platform focused on luxury fashion and accessories for women and kids. Includes authentication, cart management, and admin panel.',
    github: 'https://github.com/Upendrapal0607/ecommerce-app-8386',
    live: 'https://dreampark.netlify.app/',
    image: '/src/assets/images/dreampark.png',
    techStack: [
      { name: 'HTML', img: skills.html },
      { name: 'CSS', img: skills.css },
      { name: 'JavaScript', img: skills.js },
      { name: 'React', img: skills.react },
      { name: 'Node.js', img: skills.node },
      { name: 'Express', img: skills.express },
      { name: 'MongoDB', img: skills.mongo },
      { name: 'Chakra UI', img: skills.chakra },
    ],
  },
  {
    title: 'YouTube Clone',
    description:
      'A fully responsive YouTube clone built using React and YouTube API with video search, playback, and channel views. Features fast loading and dark mode UI.',
    github: 'https://github.com/Upendrapal0607/you-tub-clone',
    live: 'https://youtube-clone.netlify.app/',
    image: '/src/assets/images/youtube_clone.png',
    techStack: [
      { name: 'React', img: skills.react },
      { name: 'JavaScript', img: skills.js },
      { name: 'CSS', img: skills.css },
      { name: 'Postman', img: skills.postman },
      { name: 'Git', img: skills.git },
    ],
  },
]

export default projects
