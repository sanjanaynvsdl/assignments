import Layout from "./Components/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage"
import { RecoilRoot } from "recoil";
import WishlistPage from "./Components/Pages/WishListPage";
import CartPage from "./Components/Pages/CartPage"
function App() {

  return(
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index  element={<HomePage/>}/>
        <Route  path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        </Route>
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
    
  )
}

export default App;