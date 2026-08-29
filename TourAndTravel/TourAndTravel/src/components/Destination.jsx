import I1 from "../assets/1.jpg"
import I2 from "../assets/2.jpg"
import I3 from "../assets/3.jpg"
import I4 from "../assets/4.jpg"
import I5 from "../assets/5.jpg"
import I6 from "../assets/6.jpg"

const data = [
    {
        "locationName": "Bali Beach Escape",
        "aboutLocation": "Wake up to golden beaches, lush rice terraces, and warm ocean breezes in Bali. This tropical getaway blends peaceful sunrise views with unforgettable island adventures for couples, families, and solo travellers.",
        "Image1": I1,
        "Image2": I2,
        reverse: false
    },
    {
        "locationName": "Santorini Sunset Tour",
        "aboutLocation": "Discover whitewashed villages, blue-domed rooftops, and breathtaking cliffside sunsets in Santorini. From cozy cafes to scenic boat rides, every moment feels like a postcard come to life.",
        "Image1": I3,
        "Image2": I4,
        reverse: true
    },
    {
        "locationName": "Swiss Alpine Retreat",
        "aboutLocation": "Explore towering mountains, crystal lakes, and charming alpine towns in Switzerland. Whether you want peaceful hikes or luxury mountain stays, this destination offers pure serenity and unforgettable views.",
        "Image1": I5,
        "Image2": I6,
        reverse: false
    }
]

const Destination = () => {
    return (
        <section className="mx-auto max-w-full px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">Popular Destinations</h1>
                <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                    Tours give you the opportunity to see a lot, within a time frame.
                </p>
            </div>
            {
                data.map(({ locationName,
                    aboutLocation,
                    Image1, reverse,
                    Image2 }) => {
                    return (
                        <div className="rounded-3x p-4 my-5 shadow-slate-200/80">
                            <div className={`grid ${reverse ? "[direction:rtl]" : ""} items-center gap-8 lg:grid-cols-[1.1fr_1.2fr]`}>
                                <div className={`${reverse ? "text-left lg:text-left" : "text-left"}`}>
                                    <h2 className={`mb-4 text-2xl  font-bold text-slate-800 sm:text-3xl $`}>
                                        {locationName}
                                    </h2>
                                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                                        {aboutLocation}
                                    </p>
                                </div>

                                <div className=" relative grid gap-4 sm:grid-cols-2">
                                    <img
                                        className="h-64 w-full rounded-2xl object-cover shadow-md sm:h-72 lg:h-80"
                                        src={Image1}
                                        alt="Destination scenic view 1"
                                    />
                                    <img
                                        className="h-64 w-full rounded-2xl object-cover shadow-md  sm:h-72 lg:h-80"
                                        src={Image2}
                                        alt="Destination scenic view 2"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default Destination