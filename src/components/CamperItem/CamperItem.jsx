import css from './CamperItem.module.css';
import sprite from '../../img/icons.svg';
import Loader from '../Loader/Loader.jsx';
import { useState } from 'react';

export default function CamperItem({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const imageUrl = item.gallery?.[0]?.thumb || '/img/default-image.jpg';

  const handleImageError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleSearch = () => {};

  const equipmentIcons = [
    { key: 'AC', label: 'Air Conditioning', icon: 'icon-ac' },
    { key: 'bathroom', label: 'Bathroom', icon: 'icon-bathroom' },
    { key: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { key: 'TV', label: 'TV', icon: 'icon-tv' },
    { key: 'radio', label: 'Radio', icon: 'icon-radio' },
    { key: 'refrigerator', label: 'Refrigerator', icon: 'icon-fridge' },
    { key: 'microwave', label: 'Microwave', icon: 'icon-microwave' },
    { key: 'gas', label: 'Gas', icon: 'icon-stove' },
    { key: 'water', label: 'Water Supply', icon: 'icon-water' },
  ];

  return (
    <li key={item.id} className={css.item}>
      <div className={css.imageBlock}>
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        <img
          src={isError ? '/img/default-image.jpg' : imageUrl}
          alt={item.name || 'Default camper'}
          className={css.image}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      </div>
      <div>
        <div className={css.titleBlock}>
          <h2 className={css.title}>{item.name}</h2>
          <div className={css.titleWrap}>
            <h2 className={css.title}>€{item.price}</h2>
            <svg className={css.heart} width="26" height="24">
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </div>
        </div>
        <div className={css.infoBlock}>
          <div className={css.info}>
            <svg className={css.star} width="16" height="16">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p className={css.infoText}>{item.rating}(Reviews)</p>
          </div>
          <div className={css.info}>
            <svg className={css.map} width="16" height="16">
              <use href={`${sprite}#icon-map`} />
            </svg>
            <p className={css.infoText}>{item.location}</p>
          </div>
        </div>

        <p className={css.description}>{item.description}</p>

        <div className={css.equipmentBlock}>
          {equipmentIcons.map(({ key, label, icon }) =>
            item[key] ? (
              <div key={key} className={css.equipmentItem}>
                <svg className={css.icon} width="24" height="24">
                  <use href={`${sprite}#${icon}`} />
                </svg>
                <span className={css.label}>{label}</span>
              </div>
            ) : null
          )}
        </div>

        <button type="button" className={css.btn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </li>
  );
}
