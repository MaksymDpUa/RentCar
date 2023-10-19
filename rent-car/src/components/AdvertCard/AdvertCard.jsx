import css from "./AdvertCard.module.css";
import { ImageThumb } from "./AdvertCard.styled";
export const AdvertCard = ({ make, model, img, photoLink }) => {
  // console.log(advert)
  const imgUrl = img || photoLink;
  return (
    <li className={css.advertListItem}>
      <ImageThumb img={imgUrl} />
      <div>
        <h3>{make}</h3>
        <p>{model}</p>
      </div>
      <p>{make}</p>
    </li>
  );
};
