import Image1 from "../assets/3.jpg"
import Image2 from "../assets/4.jpg"
import Image3 from "../assets/5.jpg"

const data = [
    {
        "image": Image1,
        "tripName": "Dubai Desert Adventure",
        "description": "Experience luxury desert camps, dune rides, and starlit evenings in one of the most exciting travel destinations in the Middle East."
    },
    {
        "image": Image2,
        "tripName": "Bali Island Escape",
        "description": "Relax on serene beaches, explore waterfalls, and enjoy peaceful mornings in Bali's scenic tropical landscape."
    },
    {
        "image": Image3,
        "tripName": "Swiss Alpine Journey",
        "description": "Take in snow-covered peaks, cozy mountain lodges, and unforgettable train rides through Switzerland's breathtaking valleys."
    },
]
const RecentTrips = () => {
    return (
        <section>
            <div className="mb-10 text-center mt-10">
                <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">Popular Destinations</h1>
                <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                    Tours give you the opportunity to see a lot, within a time frame.
                </p>
            </div>
            <div>
                <div className="sm:grid grid-cols-3 gap-2">
                    {
                        data.map(({ image, tripName, description }) => (
                            <div className="p-3 m-3 shadow-2xl rounded-2xl">
                                <img className="h-64 w-full rounded-2xl object-cover shadow-md  sm:h-72 lg:h-80" src={image} alt="" />
                                <h3 className="font-bold text-2xl mt-3">{tripName}</h3>
                                <p className="text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RecentTrips