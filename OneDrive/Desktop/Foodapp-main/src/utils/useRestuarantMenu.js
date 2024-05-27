import React, { useEffect, useState } from "react";

import { MENU_API_URL } from "../utils/constants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    // console.log(data);
    const json = await data.json();
    // console.log(json.data);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestuarantMenu;
