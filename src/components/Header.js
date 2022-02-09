import React from "react";
import Search from "./Search";

function Header({search, setSearch, filterListings }) {



  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterListings={filterListings} setSearch = {setSearch} search={search}/>
    </header>
  );
}

export default Header;
