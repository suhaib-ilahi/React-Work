import { useEffect, useState } from "react"
import Card from "./Card"

const LoadMore = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json();

            if (data && data.products?.length > 0) {
                setLoading(false);
                setProducts(prev => [...prev,...data.products]);
            }
console.log(data);

        } catch (error) {
            console.error(error);
        }
    }
    const loadMore =async () => {
        setCount(prev => prev + 1);
        await fetchProducts();
        console.log(products);
        setDisabled(count * 20 === 100 ? true : false);
        
    }

    useEffect(() => {
       const time =  setTimeout(() => fetchProducts(), 3000);
        return () => clearTimeout(time);
    },[])


    if (loading) {
        return <div className="text-2xl text-center min-h-100 ">Loading Products. Please Wait.</div>
    }

    return (
        <div className="min-h-80">
             <div className="grid grid-cols-5 mx-3">
            {
                products && products.map((item, index) => (
                    <Card image={item.thumbnail}
                    keyman={index} title={item.title} />

                ))
            }
            </div>
            <button disabled={disabled} className={`${disabled? "hover:bg-red-500 " : "" } bg-blue-600 text-white rounded-xl border-none   w-auto h-auto  p-4 text-xl m-2`} onClick={() =>loadMore()}>Load More</button>
            {disabled ? "You have reached 100 products.":null}
        </div>
    )
}

export default LoadMore