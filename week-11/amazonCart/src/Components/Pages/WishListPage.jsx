import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { wishlistAtom } from "../../Store/ItemsState";
import WishListComp from "../WishListComp";
import "../../App.css"
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function WishlistPage() {
  //Array of id's [1,2,13] => WishList items
  const wishListItemsArr = useRecoilValueLoadable(wishlistAtom);

  if (wishListItemsArr.state == "loading") {
    return (
      <div className="loadingState">
        <h1>Loading👀</h1>
      </div>
    );
  }

  

  return (
    
    <div className="WishListPage">
      <h1
        style={{
            placeItems: "center",
            display: "flex",
            justifyContent: "center",
        }}
        >
      Your WishList <FaHeart style={{ margin: 10 }} />
      </h1>
    {wishListItemsArr.contents.length> 0 ? <div className="WishListPageItems">
        {wishListItemsArr.contents &&
          wishListItemsArr.contents.map((id, index) => (
            <div key={index} >
              <WishListComp id={id} />
            </div>
          ))}

      </div>: <div className="emptyWishList"><p >Your Wishlist is empty <Link to="/">Explore more!</Link></p></div>}
      
    </div>
  );
}

export default WishlistPage;
