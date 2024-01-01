import { useNavigate } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cart-Context";
import { WishListContext } from "../../context/wishList-context";

export const Header = () => {
  const navigate = useNavigate();
  const {
    productState: { inputSearch },
    productDispatch,
  } = useContext(ProductContext);
  const { cartProducts } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);

  const handleInputSearch = (e) => {
    productDispatch({ type: "SET_SEARCH_INPUT", payload: e.target.value });
    navigate("/productlistingpage");
  };

  return (
    <nav className="header-container">
      <h1 className="header-logo" onClick={() => navigate("./")}>
        BookGem
      </h1>

      <label>
        <input
          className="header-inputsearch"
          type="text"
          value={inputSearch}
          onChange={handleInputSearch}
          placeholder="Search books here..."
        />
      </label>

      <div className="nav-menu">
        <div className="icon">
          <i
            class="bx bxs-book"
            onClick={() => navigate("/productlistingpage")}
          ></i>
        </div>

        <div className="icon">
          <i class="bx bxs-heart" onClick={() => navigate("/wishlist")}>
            <sup className="wishlist-length">
              {wishList.length ? wishList.length : null}
            </sup>
          </i>
        </div>

        <div className="icon">
          <i class="bx bxs-cart" onClick={() => navigate("/cart")}>
            <sup className="cart-length">
              {cartProducts.length ? cartProducts.length : null}
            </sup>
          </i>
        </div>

        <div className="icon">
          <i class="bx bxs-user" onClick={() => navigate("/user")}></i>
        </div>
      </div>
    </nav>
  );
};
