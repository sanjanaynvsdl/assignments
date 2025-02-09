import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "../App.css"

import { Link } from "react-router-dom";
function Header() {
    return(
     <div className="nav-bar">
            <h2>Amazon.in</h2>
            <div className="top-bar-2">
                <div>
                <Link to="/wishlist"><FaHeart 
                    style={{color:"white"}} size={25}/></Link>

                </div>
                <div>
                <Link to="/cart"><FaCartShopping 
                style={{color:"white"}} size={25}/></Link>
                </div>
                
                

            </div>
        </div>
    )
}

export default Header;