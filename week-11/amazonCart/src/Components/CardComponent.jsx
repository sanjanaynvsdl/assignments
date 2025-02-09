import "../App.css"
import { FaRupeeSign , FaHeart} from "react-icons/fa";
import {wishlistAtom, cartItemsAtom} from "../Store/ItemsState"
import {  useRecoilValueLoadable, useSetRecoilState } from "recoil";
import {Link, useNavigate} from "react-router-dom"

function CardComponent({title, image, price, description, id}) {
    const setWishList = useSetRecoilState(wishlistAtom);
    const setCartItems = useSetRecoilState(cartItemsAtom);
    const wishList = useRecoilValueLoadable(wishlistAtom);
    const cartIds = useRecoilValueLoadable(cartItemsAtom);
    console.log(cartIds.contents);
    // console.log(wishList);

    const navigate=useNavigate();

    const isWishList = wishList.contents.find((wishId)=> id==wishId);
    const isCartItem = cartIds.contents.find((cartId)=> cartId==id);

    if(wishList.state=="loading"  || cartIds.state=="loading") {
        return(
            <div className="loadingState">
                <h1>Loading👀</h1>
            </div>
            
        )
    }
    return(
        <div className="card">
            
            <img src={image}/>

            <h4><b>Title : </b>{title}</h4>
            <br></br>
            <p><b>Description :</b>{description}</p>
            <br></br>
            <h3><b>Price : </b>${price}</h3>
            <br></br>
            <div style={{display:"flex"}} >

            {isWishList ? (isCartItem ? <button onClick={()=> navigate("/cart")}>Proceed to checkout</button> : <button onClick={()=>setCartItems(prev => [...prev, id]) }>Add to Cart</button> ): <button onClick={()=>setWishList(prev=> [...prev, id]) }>Add to Wish list</button>}
            
            </div>
        </div>
    )
}

export default CardComponent;