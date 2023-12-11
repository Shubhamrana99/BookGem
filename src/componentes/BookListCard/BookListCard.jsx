import { useContext } from "react";
import  "./bookListCard.css";
import { ProductContext } from "../../context/productContext";


export const BookListCard=({book})=>{

    const {getDiscount}=useContext(ProductContext)

    const {id,img,name,author,price,originalPrice,rating}=book;

   const handleAddTocart=()=>{}

    const discountInPercentage=getDiscount(originalPrice,price)

    return(
        <div className="bookListcard-container">

           <img alt={name} src={img} width="200px" />
           
           <div className="booklistDetails-container" >

                <div className="name-author-rating-container">
                   <div className="name-rating-container">
                       <p className="name" >{name}</p>
                       <p className="rating">{rating}<i class='bx bxs-star'></i></p>
                    </div>
                       <p className="author">{author}</p>
                </div>

                <div className="price-container">
                
                  <p className="price">₹{price}</p>

                  <p className="original-price">₹{originalPrice}</p>

                  <p className="discount">({discountInPercentage}% OFF)</p>

                </div>

                <button onClick={()=>handleAddTocart(book)}><i class='bx bxs-cart'></i> Add to Cart</button>

                
                <div className="addToWishlist-container" >
                    
                   <div className="fill-heart" > <i class='bx bxs-heart'></i></div>
                </div>
           </div>

        </div>
    )
}