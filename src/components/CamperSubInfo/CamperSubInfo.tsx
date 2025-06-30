import css from './CamperSubInfo.module.css';
import sprite from '../../img/icons.svg';
import { CamperData } from '../../types/camper';

interface CamperSubInfoProps {
  item: CamperData;
}

export default function CamperSubInfo({ item }: CamperSubInfoProps) {
  if (!item) {
    return null;
  }

  return (
    <div className={css.infoBlock}>
      <div className={css.info}>
        <svg className={css.star} width="16" height="16">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <p className={`${css.infoText} ${css.ratingReviews}`}>
          {item.rating ?? 0}({item.reviews?.length ?? 0} Reviews)
        </p>
      </div>
      <div className={css.info}>
        <svg className={css.map} width="16" height="16">
          <use href={`${sprite}#icon-map`} />
        </svg>
        <p className={css.infoText}>{item.location}</p>
      </div>
    </div>
  );
}
