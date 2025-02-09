import {atom, atomFamily, selector, selectorFamily} from "recoil"
import axios from 'axios'




export const ItemsAtom = atom({
    key:'ItemsAtom',
    default: selector({
        key:'itemsSelector',
        get:async()=> {
            const res = await axios.get("https://dummyjson.com/products");
            // console.log(res.data.products);
            return res.data.products
        }
    })
})

export const wishlistAtom = atom({
    key:'wishListAtom',
    default:[]
})

//Dynamically rendering all wishList atoms
//Creates atom for every wishList item,
export const wishListItemsFamily = atomFamily({
    key:'wishListItemsAtomFamily',
    default:selectorFamily({
        key:'wishListItemsSelectorFamily',
        get:(id)=> async ({get})=> {
            const res = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(res.data);
            return res.data;
        }
    }) 
});

//Cart should be a selector, as it contains only the items which are of, wishlist
//----incorrect
// export const cartSelector = selector({
//     key:'cartSelector',
//     get:({get})=> {
//         const cartItems = get(wishlistAtom);
//         return cartItems;
//     }
// });

//array of id's
export const cartItemsAtom = atom({
    key:'cartItemsAtom',
    default:[],
})

export const counterAtom = atomFamily({
    key:'CartCounter',
    default:1
});

//For Payment, use the selector as all of the items in the cart need to summed up,
export const totalPriceSelector = selector({
    key:'totalPriceSelector',
    get:({get})=> {
        const cartItems = get(cartItemsAtom);
        
        return cartItems.reduce((totalPrice, id)=> {
            const count = get(counterAtom(id));
            const item = get(wishListItemsFamily(id));
            const price = item.price;
            console.log(price +" : This is the price of each item in the cart!");
            console.log(count+" : This is the count for each item in the cart!")


            return totalPrice += price*count
        },0);
    }
});

export const totalItems = selector({

    key:'totalItems1',
    get:({get})=> {
        const cartItems = get(cartItemsAtom);

        return cartItems.reduce((totalcnt, id)=> {
            const count = get(counterAtom(id));

            return totalcnt+=count
        },0)
    }
}

)






  