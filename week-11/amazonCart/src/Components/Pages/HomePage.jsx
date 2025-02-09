import "../../App.css"
import CardComponent from "../CardComponent";
import {  ItemsAtom } from "../../Store/ItemsState";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
function HomePage() {

    const homePageItems=useRecoilValueLoadable(ItemsAtom);
    if(homePageItems.state=="loading") {
        return (
            <div className="loadingState">
                <h1>Loading👀</h1>
                
            </div>
        )
    }
    


    
    return(
        <div className="homePage">
            <h1 style={{display:"flex", justifyContent:"center"}}>🛍️ Discover Trendy Picks & Best Deals – Just for You! ✨</h1>
            <div className="homePageItems">
            {homePageItems.contents && homePageItems.contents.map((item, index)=> (
                <div
                    key={index}>
                    <CardComponent
                    id={item.id}
                    title={item.title}
                    image={item.images[0]}
                    price={item.price}
                    description={item.description}
                    
                />
                </div>
                
            ))}

            </div>
            
            
        </div>
    )
}

export default HomePage;