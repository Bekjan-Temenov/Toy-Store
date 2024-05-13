import React from "react";
import insta from "../../../assets/svg/ant-design_instagram-filled.svg";
import meta from "../../../assets/svg/Group.svg";
import { Link } from "react-router-dom";

const Instagram = () => {
  return (
    <div className="flex gap-1 ">
      <Link to={"https://www.instagram.com/"}>
        <img className="pt-2" src={insta} alt="" />
      </Link>
      <Link to={"https://vk.com/feed"}>
        <img className="pt-[10px]"  src={meta} alt="" />
      </Link>
    </div>
  );
};

export default Instagram;
