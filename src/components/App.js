import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {useEffect, useState} from 'react'


const BASE_URL= 'http://localhost:6001/listings'

function App() {

  const [ listings, setListings ] = useState([])

  const [search, setSearch ] = useState('')

  useEffect (() => {
    fetch(BASE_URL)
    .then(r => r.json())
    .then(listingData => setListings(listingData))

  }, []);

  const filterListings = listings.filter((post) => { 
    const postIncludesSearch = post.description.toLowerCase().includes(search.toLowerCase())
    const locationIncludesSearch = post.location.toLowerCase().includes(search.toLowerCase())

    return postIncludesSearch || locationIncludesSearch;
  })


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} listings = {listings} />
      <ListingsContainer listings = {filterListings} />
    </div>
  );
}

export default App;
