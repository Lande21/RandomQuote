import React, { useState, useEffect } from 'react';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  useEffect(() => {
    setAddedToFavorites(false); // Reset the message when a new quote is fetched
  }, [isFavorite]); // Trigger reset when isFavorite changes

  const toggleFavorite = () => {
    setIsFavorite(prevState => {
    setAddedToFavorites(!prevState); // Show the message only when adding to favorites
    return !prevState;
    });
};

  return (
    <div>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {addedToFavorites && <p>Added to favorites!</p>}
    </div>
  );
};

export default FavoriteButton;