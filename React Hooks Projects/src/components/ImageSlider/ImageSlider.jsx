import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ImageSlider = () => {
    const url = 'https://picsum.photos/v2/list?page=1&limit=10'

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const moveRight = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

    }
    const moveLeft = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)

    }
    const fetchImage = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            setTimeout(()=> fetchImage(url) ,3000)
        }
    }, [url])

    console.log(images);

    if (loading) {
        return <div className="text-2xl text-center mt-50 min-h-100 ">Loading! Please wait.</div>
    }

    if (error !== null) {
        return <div>Error occured. {error}</div>
    }

    return (
        <div className="flex justify-center">
            <div className="flex w-100 h-100 rounded-2xl my-3 contain-content items-center justify-center bg-black">
                <BsArrowLeftCircle className="absolute cursor-pointer w-8 h-8 text-white shadow-xl left-4" onClick={() => moveLeft()} />
                {images &&
                    images.map(({ id, download_url }, index) =>( 
                        <img className={`w-full h-full shadow-xl object-cover ${currentSlide === index ? "" : "hidden"}`} src={download_url} key={id} alt=""
                        />
                        
                    ))
                }
                <BsArrowRightCircle className="absolute cursor-pointer w-8 h-8 text-white shadow-xl right-4" onClick={() => moveRight()} />

                <span className="absolute bottom-1 flex">
                    {images &&
                        images.map(({ id }, index) => (
                            <button key={id} className={` h-4 w-4 rounded-full border-none outline-none mr-2 ${currentSlide === index ? "bg-white" : "bg-gray-500"} cursor-pointer`} onClick={() => setCurrentSlide(index)} ></button>
                        ))
                    }
                </span>
            </div>
        </div>
    )
}

export default ImageSlider;