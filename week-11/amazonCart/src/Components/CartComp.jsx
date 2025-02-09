import { FaRupeeSign } from "react-icons/fa";
import "../App.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartItemsAtom, counterAtom } from "../Store/ItemsState";

function CartComp({ id, title, price, image }) {


  const setCartItems = useSetRecoilState(cartItemsAtom);
  const [itemCount, setItemCount] = useRecoilState(counterAtom(id));

  const deleteItem = () => {
    setCartItems((prev) => prev.filter((item) => item !== id));
  };
  return (
    <div className="cartComp">
      <div>
        <div className="cartImg">
          <img src={image} />
          <div>
            <h3>{title}</h3>
            <p style={{ color: "green", margin: "4px 0px" }}>In Stock</p>
            <div>
              <div className="counterClass">
                <button onClick={() => setItemCount((prev) => prev - 1)}>
                  -
                </button>
                <p>{itemCount}</p>
                <button onClick={() => setItemCount((prev) => prev + 1)}>
                  +
                </button>
              </div>

              <button
                className="deletebtnCart"
                onClick={deleteItem}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
        
        <h3>${price * itemCount}</h3>
      
    </div>
  );
}

export default CartComp;
