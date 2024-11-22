import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    // Fetch product from API
    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, []) // [] means only called once, i.e. loaded once
    
    


    return(
        <>   
            <ProductList products={products} />
        </>
        
    )
}