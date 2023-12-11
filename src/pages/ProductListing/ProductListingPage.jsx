import React, { useContext } from "react"
import "./product.css";
import { ProductContext } from "../../context/productContext";
import { BookListCard } from "../../componentes/BookListCard/BookListCard";


export const ProductListingPage=()=>{

    const {productState:{bookList}}=useContext(ProductContext)

    return(
        <React.Fragment>
           <div className="productListing-container" >
           

           <div className="books-container">

           <h1>Showing Books</h1>
           
           <div className="bookListCard-container">
           {bookList.map((book)=>{
            return <BookListCard key={book.id} book={book}  />
           })
           }
           </div>
           </div>

           </div>
        </React.Fragment>
    )
}