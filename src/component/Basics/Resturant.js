import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];
// console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  // const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    // console.log(category);

    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currElem) => {
      // if(currElem.category === category){
      // console.log(currElem.category);
      // }
      return currElem.category === category;
    });

    // console.log(updatedList)
    setMenuData(updatedList);
    // setMenuData(menuData);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
      {/* <navbar/> */}
    </>
  );
};

export default Resturant;
