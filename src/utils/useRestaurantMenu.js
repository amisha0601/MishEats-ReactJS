//// src/utils/useRestaurantMenu.js
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:7000/api/menu/" + resId
      );

      if (!response.ok) {
        throw new Error(`API failed with status: ${response.status}`);
      }

      const json = await response.json();

      setResInfo(json?.data);
    } catch (error) {
      console.error("Menu API Error:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;