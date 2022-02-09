import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings}) {

  const theList = listings.map((post) => {

    return <ListingCard 
                  key={post.id} 
                  description={post.description} 
                  image={post.image} 
                  location={post.location}
    />

  })

  return (
    <main>
      <ul className="cards">
        {theList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
