import React, { useState } from "react";
import FavoriteHeader from "../components/pages/favorite/FavoriteHeader";
import FavoriteList from "../components/pages/favorite/FavoriteList";
import EmptyFavoriteList from "../components/pages/favorite/EmptyFavoriteList";

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  return(
    <>
      <FavoriteHeader />
      {favoriteList.length !== 0 ? 
        <FavoriteList /> : 
        <EmptyFavoriteList />
      }
    </>
  )
}

export default Favorite;