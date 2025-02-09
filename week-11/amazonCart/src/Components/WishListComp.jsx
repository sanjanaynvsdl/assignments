import {  useRecoilValueLoadable } from "recoil";
import {  wishListItemsFamily } from "../Store/ItemsState";
import CardComponent from "./CardComponent";
import "../App.css"

function WishListComp({id}) {

    const item = useRecoilValueLoadable(wishListItemsFamily(id));

    if(item.state=="loading") {
        return(
            <div className="loadingState">
                <h1>Loading👀</h1>

            </div>
        )
    }
    return(
        <div key={item.contents.id}>
            <CardComponent
                
                id={item.contents.id}
                title={item.contents.title}
                price={item.contents.price}
                description={item.contents.description}
                image={item.contents.images[0]}

            />
        </div>
    )
}

export default WishListComp;