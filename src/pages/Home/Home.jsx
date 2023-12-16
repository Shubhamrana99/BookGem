import { Link } from "react-router-dom";
import "./home.css";
import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";

export const Home = () => {
  const {
    categoriesState: { categoriesList },
  } = useContext(CategoryContext);

  // console.log(categoriesList);

  return (
    <div className="home-container">
      <div className="home-content-container">
        <p>Welcome to BookGem,</p>
        <h2>Where Every Page is a Treasure</h2>
        <Link className="products-link" to={"/productlistingpage"}>
          Explore now <i class="bx bxs-right-arrow"></i>
        </Link>
      </div>

      <div className="category-text-container">
        <h2>Book Categories</h2>
        <p>
          BookGem offers a variety of book categories. Discover your favorite
          now!
        </p>
      </div>

      <div className="category-details-conatiner">
        {categoriesList ? (
          categoriesList.map(({ id, categoryName, description }) => (
            <div className="category-container" key={id}>
              <p>{categoryName}</p>
              <small>{description}</small>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
};
