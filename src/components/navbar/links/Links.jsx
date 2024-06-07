"use client";
import React, { useState } from "react";
import Styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={Styles.container}>
      <div className={Styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={Styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={Styles.MenuButton} onClick={() => setOpen((pre) => !pre)}>
        Menu
        {open && (
          <div className={Styles.mobileLinks}>
            {links.map((ele) => (
              <NavLink item={ele} key={ele.title} />
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default Links;
