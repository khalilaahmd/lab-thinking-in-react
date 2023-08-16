import React from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import { useState } from 'react';
import productsData from './../data.json';

function ProductsPage () {
    const [searchTerm, setSearchTerm] = useState('');
    const [onlyInStock, setOnlyInStock] = useState(false);

    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!onlyInStock || product.inStock)
    );

    return (
        <div className="App">
        <p>IronStore</p>
        <SearchBar onSearch={setSearchTerm} onStock={setOnlyInStock}/>
        <ProductTable products={filteredProducts}/>
        </div>
    );
}

export default ProductsPage;