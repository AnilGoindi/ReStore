import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    // Fetch product from API
    useEffect(() => {
      agent.Catalog.list().then(products => setProducts(products))
    }, []) // [] means only called once, i.e. loaded once
    
    

    return(
        <>   
            <ProductList products={products} />
        </>
        
    )
}