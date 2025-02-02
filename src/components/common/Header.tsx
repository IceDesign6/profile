import { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

import { MenuItem } from "@interface/header.interface";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [menu] = useState<MenuItem[]>([
    { label: "biography", link: "/" },
    { label: "experience", link: "/work-experience" },
    { label: "portfolios", link: "/portfolios" },
    { label: "contact", link: "/contact" },
  ]);

  const switchLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <>
      <div className="flex justify-end mx-[50px]">
        {menu.map((menuItem) => {
          return (
            <NavLink
              to={{ pathname: menuItem.link }}
              className="text-2xl font-[500] px-[30px] leading-[4]"
              key={menuItem.label}
            >
              {t(menuItem.label)}
            </NavLink>
          );
        })}
      </div>
      <div onClick={() => switchLanguage("en")}>EN</div>
      <div onClick={() => switchLanguage("zhTw")}>繁體</div>
    </>
  );
};

export default Header;
