import React, { useEffect, useState } from "react";
import FavoriteHeader from "../components/pages/favorite/FavoriteHeader";
import FavoriteList from "../components/pages/favorite/FavoriteList";
import EmptyFavoriteList from "../components/pages/favorite/EmptyFavoriteList";
import { getMyLikePerformanceApi } from "../api/performanceApi";

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyLikePerformanceApi();
      setFavoriteList(response.data);
    }
    fetchData();
  }, []);

  return(
    <>
      <FavoriteHeader />
      {favoriteList.length !== 0 ? 
        <FavoriteList 
          datas={favoriteList}
        /> : 
        <EmptyFavoriteList />
      }
    </>
  )
}

export default Favorite;