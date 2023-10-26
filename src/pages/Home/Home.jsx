import { Link } from "react-router-dom";
import "./home.css";

export const Home=()=>{
    return(
        <div className="home-container">
        <div className="home-content-container" >
        <p>Welcome to BookGem,</p>
       <h2>Where Every Page is a Treasure</h2>
       <Link className="products-link">Explore now <i class='bx bxs-right-arrow'></i></Link>
        </div>

        <div className="category-text-container" >
            <h2>Book Categories</h2>
            <p>BookGem offers a variety of book categories. Discover your favorite now!</p>
        </div>

        <div className="category-details-conatiner" >
        
            <div className="category-container" ></div>
            <div className="category-container" ></div>
            <div className="category-container" ></div>

        </div>
        
        </div>
    )
}