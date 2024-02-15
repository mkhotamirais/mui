import { useState } from "react";
import { NavLink } from "react-router-dom";

const menus = [
  "typography",
  "button",
  "textfield",
  "select",
  "radio",
  "checkbox",
  "switch",
  "rating",
  "autocomplete",
  "box",
  "grid",
];

const Header = () => {
  const [active, setActive] = useState(null);

  return (
    <header className="border-b h-16 w-full flex px-3 lg:px-16 items-center gap-2 overflow-x-scroll bg-white">
      <a href="/">HOME</a>
      {menus.map((menu, i) => (
        <NavLink onClick={() => setActive(i)} className={active === i ? "underline" : null} key={i} to={menu}>
          {menu}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
