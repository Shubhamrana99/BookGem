import "./header.css";

export const Header=()=>{
    return(
        <nav className="header-container">
        <h1 className="header-logo">BookGem</h1>

        <label>
        <input className="header-inputsearch"  type="text" value={""} onChange={""} placeholder="Search books here..." />
        </label>

        <div className="nav-menu">
       
       <i class='bx bxs-book'></i>
       <i class='bx bxs-heart'></i>
        <i class='bx bxs-cart'></i>
        <i  class='bx bxs-user'></i>
       
        </div>
        </nav>
        
    )
}