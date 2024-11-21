import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props{
    products: Product[]; // We are receiving a Product array from App.tsx
    addProduct: () => void; // fn passed in no params currently
}



export default function Catalog({products, addProduct}: Props) {
    return(
        <>   
            <ProductList products={products} />
            <Button variant='contained' onClick={addProduct}>Add product</Button>
        </>
        
    )
}