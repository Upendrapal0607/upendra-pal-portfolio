// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import { motion } from 'framer-motion'
// import SkillCard from './Skill-card'
// import 'swiper/css'
// import 'swiper/css/autoplay'

// const skills = [
//   { name: 'HTML', img: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' },
//   { name: 'CSS', img: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' },
//   { name: 'JavaScript', img: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
//   { name: 'NodeJS', img: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
//   { name: 'React', img: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
//   { name: 'Redux', img: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
//   { name: 'MongoDB', img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
//   { name: 'Express', img: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
//   { name: 'Postman', img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
//   { name: 'Chakra UI', img: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg' },
//   { name: 'Git', img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
//   { name: 'GitHub', img: 'https://www.vectorlogo.zone/logos/github/github-tile.svg' },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="bg-black py-20 px-2">
//       <div className="max-w-full">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl text-center font-serif mb-12 text-white"
//         >
//           Skills
//         </motion.h2>

//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           slidesPerView={6}
//           breakpoints={{
//             480: { slidesPerView: 3 },
//             768: { slidesPerView: 4 },
//             1024: { slidesPerView: 5 },
//             1280: { slidesPerView: 6 },
//           }}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           loop
//         >
//           {skills.map((s) => (
//             <SwiperSlide key={s.name}>
//               <SkillCard name={s.name} img={s.img} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   )
// }



import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import SkillCard from './Skill-card'
import 'swiper/css'
import 'swiper/css/autoplay'

const skills = [
  { name: 'HTML', img: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' },
  { name: 'CSS', img: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' },
  { name: 'JavaScript', img: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
  { name: 'NodeJS', img: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
  { name: 'React', img: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'Redux', img: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
  { name: 'MongoDB', img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
  { name: 'Express', img: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
  { name: 'Postman', img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Chakra UI', img: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg' },
  { name: 'Git', img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
  { name: 'GitHub', img: 'https://www.vectorlogo.zone/logos/github/github-tile.svg' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-16 px-4 md:px-10">
      <div className="max-w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-serif mb-12 text-white"
        >
          Tech Stack & Skills
        </motion.h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 18 },
            640: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
            1280: { slidesPerView: 6, spaceBetween: 24 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
        >
          {skills.map((s) => (
            <SwiperSlide key={s.name}>
              <SkillCard name={s.name} img={s.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
