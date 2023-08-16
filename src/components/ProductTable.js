import React, { useState } from "react";
import ProductRow from "./ProductRow";
import productsData from './../data.json';


function ProductTable () {
    const [products] = useState(productsData);
    return (
        <div className="App">
        <table className="table">
            <thead>
                <tr className="columnHead">
                    <th>
                        Name
                    </th>
                    <th>
                        category
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        In Stock
                    </th>
                </tr>
            </thead>
            <tbody>
                    {products.map(product => (
                     <ProductRow key={product.id} product={product}/>
                    ))}
            </tbody>
        </table>
        </div>
    );
}

export default ProductTable;