import { useEffect, useState } from "react";

import m101 from "../utils/mockData/menus/101";
import m102 from "../utils/mockData/menus/102";
import m103 from "../utils/mockData/menus/103";
import m104 from "../utils/mockData/menus/104";
import m105 from "../utils/mockData/menus/105";
import m106 from "../utils/mockData/menus/106";
import m107 from "../utils/mockData/menus/107";
import m108 from "../utils/mockData/menus/108";
import m109 from "../utils/mockData/menus/109";
import m110 from "../utils/mockData/menus/110";
import m111 from "../utils/mockData/menus/111";
import m112 from "../utils/mockData/menus/112";
import m113 from "../utils/mockData/menus/113";
import m114 from "../utils/mockData/menus/114";
import m115 from "../utils/mockData/menus/115";
import m116 from "../utils/mockData/menus/116";
import m117 from "../utils/mockData/menus/117";
import m118 from "../utils/mockData/menus/118";
import m119 from "../utils/mockData/menus/119";
import m120 from "../utils/mockData/menus/120";

const menus = {
  "101": m101,
  "102": m102,
  "103": m103,
  "104": m104,
  "105": m105,
  "106": m106,
  "107": m107,
  "108": m108,
  "109": m109,
  "110": m110,
  "111": m111,
  "112": m112,
  "113": m113,
  "114": m114,
  "115": m115,
  "116": m116,
  "117": m117,
  "118": m118,
  "119": m119,
  "120": m120,
};

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(menus[resId]?.data);
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;