import axios from "axios";

export const getCategoryService= async ()=>await axios.get("/api/categories"); 

