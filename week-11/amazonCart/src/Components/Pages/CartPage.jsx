import { useRecoilValueLoadable } from "recoil";
import { CiShoppingCart } from "react-icons/ci";
import "../../App.css"
import CartComp from "../CartComp";
import { cartItemsAtom, wishListItemsFamily } from "../../Store/ItemsState";
import {Link} from "react-router-dom"
import TotalPayment from "../TotalPayment"

function CartPage() {
  const cartItemsId = useRecoilValueLoadable(cartItemsAtom);
  console.log("CartItems :"+cartItemsId);

  if (cartItemsId.state == "loading") {
    return (
      <div className="loadingState">
        <h1>Loading👀</h1>
      </div>
    );
  }

  return (
    <div className="CartPage">
      <div>
        <h1 style={{display:'flex', justifyContent:'center'}}>Shopping Cart</h1>
        <br></br>
        {cartItemsId.contents.length > 0 ? (
          cartItemsId.contents.map((id, index) => (
            <div key={index}>
              <EachComp id={id} />
            </div>
          ))
        ) : (
          <div className="emptyCartPage">
            <p
              style={{
                placeItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Your Cart is Empty! <Link to="/wishlist">Add items to Cart</Link>
            </p>
          </div>
        )}
      </div>
      <div>
        <TotalPayment/>
      </div>
    </div>
  );
}

function EachComp({ id }) {
  const item = useRecoilValueLoadable(wishListItemsFamily(id));

  if (item.state == "loading") {
    return (
      <div className="loadingState">
        <h1>Loading👀</h1>
      </div>
    );
  }

  return (
    <div>
      <CartComp
        id={id}
        title={item.contents.title}
        price={item.contents.price}
        image={item.contents.images[0]}
      />
    </div>
  );
}

export default CartPage;
