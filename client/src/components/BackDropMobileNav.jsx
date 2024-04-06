import React from "react";
import { useDispatch } from "react-redux";
import { hiddenDrawer } from "../reducers/mobileNavSlice.js";

const BackDropMobileNav = () => {
  const dispath = useDispatch();

  return <div className="backdrop" onClick={()=> dispath(hiddenDrawer())}></div>;
};

export default BackDropMobileNav;
