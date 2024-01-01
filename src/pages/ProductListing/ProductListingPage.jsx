import React, { useContext } from "react";
import "./productlisting.css";
import { ProductContext } from "../../context/productContext";
import { BookListCard } from "../../componentes/BookListCard/BookListCard";
import { CategoryContext } from "../../context/categoryContext";

export const ProductListingPage = () => {
  const {
    productState: { bookList, inputSort, inputCategory, inputRating },
    productDispatch,
    ratingFilteredProduct,
  } = useContext(ProductContext);

  const {
    categoriesState: { categoriesList },
  } = useContext(CategoryContext);

  const handleSortFilter = (e) => {
    productDispatch({ type: "SET_SORT_INPUT", payload: e.target.value });
  };

  const handleCategoryFilter = (e) => {
    productDispatch({ type: "SET_CATEGORY_INPUT", payload: e.target.value });
  };

  const handleRatingFilter = (e) => {
    productDispatch({ type: "SET_RATING_INPUT", payload: e.target.value });
  };

  const handleClearBtn = () => {
    productDispatch({ type: "SET_CLEAR_BTN", payload: bookList });
  };

  return (
    <React.Fragment>
      <div className="productListing-container">
        <div className="filter-container">
          <div className="filter-header">
            <p className="filter-heading">Filters</p>
            <button className="filter-clear-btn" onClick={handleClearBtn}>
              Clear
            </button>
          </div>

          <div className="filter-sorting-container">
            <p className="sortfilter-heading">Sort By</p>
            <label className="radio-input-field">
              <input
                className="radio-filter"
                type="radio"
                value={"lowtohigh"}
                checked={inputSort === "lowtohigh"}
                onChange={handleSortFilter}
              />
              Price - Low to High
            </label>
            <label className="radio-input-field">
              <input
                className="radio-filter"
                type="radio"
                checked={inputSort === "hightolow"}
                value={"hightolow"}
                onChange={handleSortFilter}
              />
              Price - High to Low
            </label>
          </div>

          <div className="filter-category-container">
            <p className="categoryfilter-heading">Categories</p>
            {categoriesList.map(({ id, categoryName }) => {
              return (
                <label key={id} className="category-label">
                  <input
                    type="checkbox"
                    className="category-input"
                    value={categoryName}
                    onChange={handleCategoryFilter}
                    checked={inputCategory.includes(categoryName) && true}
                  />
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
            <label className="rating-label">
              <input
                className="filter-input-range"
                type="range"
                // min={1}
                // max={5}
                // step={1}
                min="1"
                max="5"
                step="1"
                name="range"
                value={inputRating}
                defaultValue={5}
                onChange={handleRatingFilter}
              />
            </label>
          </div>
        </div>

        <div className="books-container">
          <h1 className="book-heading">Showing Books</h1>
          <div className="bookListCard-container">
            {ratingFilteredProduct.map((book) => {
              return <BookListCard key={book.id} book={book} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
