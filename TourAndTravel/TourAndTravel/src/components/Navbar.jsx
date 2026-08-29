import { MdHomeRepairService, MdOutlineHome } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosMenu, IoMdClose, IoMdContact } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const menuItems = [
    {
        title: "Home",
        url: "/",
        cName: "",
        icon: <MdOutlineHome />,
    },
    {
        title: "About",
        url: "/about",
        cName: "",
        icon: <FaCircleInfo />
    },
    {
        title: "Service",
        url: "/service",
        cName: "",
        icon: <MdHomeRepairService />
    }
    , {
        title: "Contact",
        url: "/contact",
        cName: "",
        icon: <IoMdContact />
    }
]


const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="fixed left-1/2 top-3 z-50 w-[95%] -translate-x-1/2 rounded-xl border-2 border-white/20 bg-white/90 px-4 py-3 shadow-lg shadow-black/25 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className='cursor-pointer text-3xl font-bold text-black'>
                    Trippy
                </div>

                <div onClick={handleClick} className="cursor-pointer text-2xl md:hidden">
                    {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
                </div>

                <ul
                    className={`
                        ${isMenuOpen ? "flex" : "hidden"}
                        w-full
                        list-none
                        flex-col
                        gap-2
                        pt-2
                        md:flex
                        md:w-auto
                        md:flex-row
                        md:items-center
                        md:gap-4
                        md:pt-0
                    `}
                >
                    {menuItems.map((item, index) => (
                        <li key={index} className={item.cName}>
                            <Link
                                className="flex items-center gap-1 rounded-xl p-2 font-bold transition-all ease-in-out hover:bg-[#01959a] hover:text-white"
                                to={item.url}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.icon}{item.title}
                            </Link>
                        </li>
                    ))}

                    <li className="ml-auto mt-2 md:hidden">
                        <button onClick={() => navigate("/signup")}  className="w-full rounded-xl border border-black/10 bg-black px-4 py-2 text-base font-semibold text-white transition-all hover:bg-white hover:text-black md:w-auto">
                            Sign up
                        </button>
                    </li>
                </ul>

                <button onClick={() => navigate("/signup")} className="hidden md:inline-flex items-center justify-center rounded-xl border border-black/10 bg-black px-4 py-2 text-base font-semibold text-white transition-all hover:bg-white hover:text-black">
                    Sign up
                </button>
            </div>
        </nav>
    )
}

export default Navbar