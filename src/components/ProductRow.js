import React from "react";
import { useState } from 'react';


function ProductRow ({product}) {
    return (
        <div>
        <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.inStock ? '👍' : '👎' }</td>
        </tr>
        </div>
    );
}

export default ProductRow;