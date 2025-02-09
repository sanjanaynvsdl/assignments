import { useRecoilValueLoadable } from "recoil";
import {totalPriceSelector, totalItems} from "../Store/ItemsState"
import "../App.css"
function TotalPayment() {

    const totalPrice = useRecoilValueLoadable(totalPriceSelector);
    // const totalItems = useRecoilValueLoadable()
    const totalitems = useRecoilValueLoadable(totalItems);


        if(totalPrice.state=="loading" || totalItems.state=="loading") {
            return (
                <div className="loadingState">
                    <h1>Loading👀</h1>
                </div>
            )
        }
        console.log(totalPrice.contents);

    return(
        <div>
            <h1>Order Summary!</h1>
            <br></br>
            <div className="totalSummary">
                <p>Items ({totalitems.contents})</p>
                <p>Total Order - ${totalPrice.contents}</p>
                <br></br>
                <hr></hr>
                <br></br>
                <button className="totalbtn" onClick={()=> alert("Thankyou for purchasing!👀🤍")}>Proceed to Buy</button>
            </div>
        </div>
    )
}

export default TotalPayment;