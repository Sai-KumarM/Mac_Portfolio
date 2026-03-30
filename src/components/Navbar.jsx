import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import React from "react";
import useWindowStore from "#store/Window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/public/images/logo.svg" alt="logo" />
        <p className="font-bold">Sai's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D hh:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
