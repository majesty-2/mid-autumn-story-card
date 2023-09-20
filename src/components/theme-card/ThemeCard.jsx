import React, { useEffect } from "react";
import "./ThemeCard.sass";
import data from "../../assets/data.json";

const ThemeCard = ({ theme }) => {
  useEffect(() => {
    import("./ThemeCardsStyle.sass");
  });

  const chengeMoon = () => {}

  const houyiSun = () => {}

  const rabbitDrug = () => {}

  const addThemeCardElements = (theme) => {
    switch (theme) {
      case data.storys[0].theme:
        return chengeMoon();
      case data.storys[1].theme:
        return houyiSun();
      case data.storys[2].theme:
        return rabbitDrug();
      default:
        break;
    }
  };

  return (
    <div className={`theme-card ${theme}`}>
      {addThemeCardElements(theme)}
      <div>{theme}</div>
    </div>
  );
};

export default ThemeCard;
