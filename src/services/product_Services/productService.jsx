import axios from "axios";

export const productServices=async()=>await axios("/api/products");
