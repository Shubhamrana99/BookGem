import { Link } from "react-router-dom"
import "./footer.css"

export const Footer=()=>{
    return(
        <div className="footer">

        <div className="footer-about">
    <h3>BookGem</h3>
    <p>BookGem is your premier destination for discovering, collecting, and sharing the best in literature. Our mission is to fuel your passion for reading and provide you with a curated selection of books that will spark your imagination.</p>
    <p><small>© 2023 BookGem. All Rights Reserved.</small></p>
        </div>

        <div className="footer-connectus" >
        <h3>Connect Us</h3>
        <Link className="quik-links" to={"http://github.com/Shubhamrana99/"}><i class='bx bxl-github' ></i></Link>{"   "}
        <Link className="quik-links" to={"https://twitter.com/shubham19rana"}><i class='bx bxl-twitter' ></i></Link> {"   "}
        
        <Link className="quik-links" to={"mailto:shubhamrana19599@gmail.com"}><i class='bx bxl-gmail' ></i></Link>

        </div>

        <div className="footer-quick-links" >
        <h3>Quick Links</h3>
        </div>
       
        </div>
    )
}