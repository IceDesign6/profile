import { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

import { MenuItem } from "@interface/header.interface";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [menu] = useState<MenuItem[]>([
    { label: t("homepage"), link: "/" },
    { label: t("experience"), link: "/work-experience" },
  ]);

  const switchLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <>
      <div>
        {menu.map((menuItem) => {
          return (
            <NavLink
              to={{ pathname: menuItem.link }}
              className="text-3xl"
              key={menuItem.label}
            >
              {menuItem.label}
            </NavLink>
          );
        })}
        <div onClick={() => switchLanguage("en")}>EN</div>
        <div onClick={() => switchLanguage("zh")}>繁體</div>
      </div>
    </>
  );
};

export default Header;
