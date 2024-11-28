import css from './CamperItem.module.css';
import sprite from '../../img/icons.svg';

const handleSearch = () => {};
export default function CamperItem({ item }) {
  const imageUrl = item.gallery?.[0]?.thumb || '/img/default-image.jpg';

  return (
    <li key={item.id} className={css.item}>
      <div>
        <img src={imageUrl} alt={item.name} className={css.image} />
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

        <div className={css.svgBlock}>
          <svg></svg>
        </div>

        <button type="button" className={css.btn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </li>
  );
}
