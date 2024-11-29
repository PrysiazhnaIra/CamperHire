import css from './CamperItem.module.css';
import sprite from '../../img/icons.svg';
import Loader from '../Loader/Loader.jsx';
import { useState } from 'react';
import EquipmentList from '../EquipmentList/EquipmentList.jsx';
import { useNavigate } from 'react-router-dom';
import CamperSubInfo from '../CamperSubInfo/CamperSubInfo.jsx';

export default function CamperItem({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const imageUrl = item.gallery?.[0]?.thumb || '/img/default-image.jpg';

  const handleImageError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleSearch = () => {
    navigate(`/catalog/${item.id}`);
  };

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

        <CamperSubInfo item={item} />

        <p className={css.description}>{item.description}</p>

        <EquipmentList item={item} />

        <button type="button" className={css.btn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </li>
  );
}
