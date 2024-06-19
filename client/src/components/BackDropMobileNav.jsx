import React from "react";
import { useDispatch } from "react-redux";
import { hiddenDrawer } from "../reducers/mobileNavSlide.js";

const BackDropMobileNav = () => {
  const dispatch = useDispatch();

  return <div className="backdrop" onClick={()=> dispatch(hiddenDrawer())}></div>;
};

export default BackDropMobileNav;
