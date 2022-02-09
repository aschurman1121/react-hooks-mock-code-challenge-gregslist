import React from "react";
import {useState} from 'react';

function ListingCard( {description, image, location }) {

  const [toggleLike, setToggleLike] = useState(true)
  const [deleteBtn, setDeleteBtn ] = useState(true)

  function handleToggleClick() {
    setToggleLike((toggleLike) => !toggleLike)
  }


   function handleDeleteBtn () {
    //  console.log('delete clicked')

    
     setDeleteBtn(deleteBtn => !deleteBtn)
   }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {toggleLike ? (
          <button onClick={handleToggleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleToggleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span>  {location}</span>
        <button 
        onClick={handleDeleteBtn}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
