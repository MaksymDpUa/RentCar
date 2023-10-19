import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/advertsSelectors";
import { AdvertCard } from "../AdvertCard/AdvertCard";
import css from "./AdvertList.module.css";

export const AdvertList = () => {
  const catalog = useSelector(selectAdverts);

  return (
    <ul className={css.advertList}>
      {catalog.map((advert) => {
        const advertKey = nanoid();
        console.log(advert);
        return <AdvertCard key={advertKey} {...advert} />;
      })}
    </ul>
  );
};
