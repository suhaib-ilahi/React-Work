
import nightImage from '../assets/night.jpg'
import Hero from '../components/Hero'

const About = () => {
  return (


    <>
      <Hero
        image={nightImage}
        title={"About"}
        buttonClass={"hidden"}
      />

      <div className='p-4 mt-10 mb-10 space-y-3'>
        <h2 className='font-bold text-4xl'>Our History</h2>
        <p className='text-slate-700 text-xl text-wrap mb-4'>Trippy began with a simple idea: every journey should feel personal, memorable, and stress-free. What started as a small travel passion grew into a team dedicated to helping travelers discover destinations that match their dreams, pace, and budget.</p>
        <h2 className='font-bold text-4xl'>Our Vision</h2>
        <p className='text-slate-700 text-xl text-wrap mb-4'>We want to make travel more meaningful by turning every trip into an experience filled with discovery, comfort, and unforgettable moments. Our goal is to inspire people to see the world with curiosity and confidence.</p>
        <h2 className='font-bold text-4xl'>Our Mission</h2>
        <p className='text-slate-700 text-xl text-wrap mb-4'>Our mission is to design smooth, exciting, and carefully planned journeys that help travelers explore with ease. We focus on comfort, authenticity, and thoughtful details so every adventure feels both inspiring and effortless.</p>

      </div>
    </>
  )
}

export default About