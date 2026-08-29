import Hero from "../components/Hero"
import image from "../assets/12.jpg"

import Destination from "../components/Destination"
import RecentTrips from "../components/RecentTrips"

const Home = () => {
  return (
    <>
      <Hero
        image={image}
        title="My Journey My Story"
        subtitle="Choose Favourite Destination Now."
        ctaText="Travel Plan"
        ctaLink="/"
        buttonClass="bg-white text-black hover:bg-gray-200"
        containerClass=" shadow-lg"
      />
      <Destination/>
      <RecentTrips/>
     
    </>
  )
}

export default Home