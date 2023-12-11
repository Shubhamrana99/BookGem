import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter} from "react-router-dom";

import { CategoryProvider} from "./context/categoryContext";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";

// Call make Server
makeServer();


ReactDOM.render( 
  <React.StrictMode >
    <BrowserRouter >
    <ProductProvider>
      <CategoryProvider >
           <AuthProvider>
              <CartProvider>
                 <App / > 
              </CartProvider>
           </AuthProvider>
      </CategoryProvider> 
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);