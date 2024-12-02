import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch product from API
    useEffect(() => {
      agent.Catalog.list().then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }, []) // [] means only called once, i.e. loaded once
    
    if (loading) return <LoadingComponent message="Loading products..."/>

    return(
        <>   
            <ProductList products={products} />
        </>
        
    )
}