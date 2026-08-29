import Hero from "../components/Hero"
import serviceImage from "../assets/6.jpg"
import RecentTrips from "../components/RecentTrips"

const Service = () => {
  return (
    <>
      <Hero
        image={serviceImage}
        title="Our Services"
        buttonClass="hide"
      />
      
      <RecentTrips/>
    </>
  )
}

export default Service