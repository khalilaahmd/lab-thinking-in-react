import React from "react";

function SearchBar ({ onSearch, onTick }) {
    function handleSearch(e){
        onSearch(e.target.value);
    }

    function handleStock(e){
        onTick(e.target.checked);
    }

    return (
        <div className="searchBar">
        <ul>
             <li className="search">Search</li>
             <li className="bar">
                 <input type="text" placeholder="Search..." onChange={handleSearch}></input>
             </li>
             <li className="checkbox">
                 <input type="checkbox" onTick={handleStock}/>
                 <label>Only show products in stock</label>
             </li>
        </ul>
        </div>
    );
}

export default SearchBar;