import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componentes/Header/Header";
import { Home } from "./pages/Home/Home";
import { Footer } from "./componentes/Footer/Footer";
import Mockman from "mockman-js";
import { ProductListingPage } from "./pages/ProductListing/ProductListingPage";
import { WishList } from "./pages/Wishlist/WishList";
import { Cart } from "./pages/Cart/Cart";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import { User } from "./pages/User/User";
import { AddressForm } from "./utils/address/AddressForm";
import { CheckOut } from "./pages/Checkout/CheckOut";
import { RequireAuth } from "./utils/requireauth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlistingpage" element={<ProductListingPage />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/productdetails/:bookID" element={<ProductDetails />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/mockman" element={<Mockman />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
