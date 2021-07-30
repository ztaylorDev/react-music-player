import React from "react";

const SearchBar = (props) => {
    return(
        
    <form action="/" method="get">
        <label htmlFor="header-search">
        <span className="visually-hidden"></span>
        </label>
        <input
        type="text"
        id="header-search"
        placeholder="search songs"
        name="s"
        value={userInput} onChange={this.handleChange}
        />
        <button type="submit">Search</button>
    </form>
    );
};

export default SearchBar;
