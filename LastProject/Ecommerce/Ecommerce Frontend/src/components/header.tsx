import { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const user = { _id: "ddaddsf" , role:"admin"};
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const logoutHandler = () =>{
    setIsOpen(false);
  }
  return (
    <>
    <div className="header">
      <nav>
        <Link onClick={() => setIsOpen(false)} to={"/"}>
          <FaHome />
        </Link>
        <Link onClick={() => setIsOpen(false)}  to={"/search"}>
          <FaSearch />
        </Link>
        <Link onClick={() => setIsOpen(false)}  to={"/cart"}>
          <FaShoppingBag />
        </Link>

        {user?._id.length > 0 ? 
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
            <dialog open={isOpen}>
              <div>
                {user?.role === "admin" && 
                (<Link to={"/admin/dashboard"}>Admin</Link>)
                }

                <Link to={"/orders"}>Orders</Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
            </>
         : 
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        }
      </nav>
    </div>
    </>
  );
}

export default Header;
