import React, { useContext } from "react";
import "./product.css";
import { ProductContext } from "../../context/productContext";
import { BookListCard } from "../../componentes/BookListCard/BookListCard";
import { CategoryContext } from "../../context/categoryContext";

export const ProductListingPage = () => {
  const {
    productState: { bookList },
  } = useContext(ProductContext);

  const {
    categoriesState: { categoriesList },
  } = useContext(CategoryContext);

  return (
    <React.Fragment>
      <div className="productListing-container">
        <div className="filter-container">
          <div className="filter-header">
            <p>Filters</p>
            <button>Clear</button>
          </div>

          <div className="filter-sorting-container">
            <p className="sortfilter-heading"></p>
            <label>
              <input type="radio" />
              Price - Low to High
            </label>
            <label>
              <input type="radio" />
              Price - High to Low
            </label>
          </div>

          <div className="filter-category-container">
            <p className="categoryfilter-heading">Categories</p>
            {categoriesList.map(({ id, categoryName }) => {
              return (
                <label key={id}>
                  <input type="checkbox" />
                  {categoryName}
                </label>
              );
            })}
          </div>

          <div className="filter-rating-container">
            <p className="ratingfilter-heading">Rating</p>
            <div className="ratingsfilter-text">
              <p> 1 ★ </p> <p> 2 ★ </p> <p> 3 ★ </p> <p> 4 ★ </p> <p> 5 ★ </p>
            </div>
            <label>
              <input
                className="filter-range"
                type="range"
                min="1"
                max="5"
                step="1"
                defaultValue={5}
              />
            </label>
          </div>
        </div>

        <div className="books-container">
          <h1 className="book-heading">Showing Books</h1>
          <div className="bookListCard-container">
            {bookList.map((book) => {
              return <BookListCard key={book.id} book={book} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
