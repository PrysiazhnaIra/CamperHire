import EquipmentList from '../EquipmentList/EquipmentList.js';
import css from './CamperFeatures.module.css';

export default function CamperFeatures({ item }) {
  return (
    <div className={css.featuresBlock}>
      <EquipmentList item={item} />

      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.line}></div>

      <div className={css.detailsBlock}>
        <div className={css.detailsElem}>
          <p className={css.text}>Form</p>
          <p className={css.text}>{item.form}</p>
        </div>
        <div className={css.detailsElem}>
          <p className={css.text}>Length</p>
          <p className={css.text}>{item.length}</p>
        </div>
        <div className={css.detailsElem}>
          <p className={css.text}>Width</p>
          <p className={css.text}>{item.width}</p>
        </div>
        <div className={css.detailsElem}>
          <p className={css.text}>Height</p>
          <p className={css.text}>{item.height}</p>
        </div>
        <div className={css.detailsElem}>
          <p className={css.text}>Tank</p>
          <p className={css.text}>{item.tank}</p>
        </div>
        <div className={css.detailsElem}>
          <p className={css.text}>Consumption</p>
          <p className={css.text}>{item.consumption}</p>
        </div>
      </div>
    </div>
  );
}
