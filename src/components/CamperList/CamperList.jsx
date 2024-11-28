import { useSelector } from 'react-redux';
import css from './CamperList.module.css';
import { selectAllCampers } from '../../redux/camper/selectors.js';
import CamperItem from '../CamperItem/CamperItem.jsx';

export default function CamperList() {
  const items = useSelector(selectAllCampers);

  return (
    <div>
      {items.length > 0 && (
        <ul className={css.list}>
          {items.map(item => (
            <CamperItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
