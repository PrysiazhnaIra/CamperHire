import { useSelector } from 'react-redux';
import css from './CamperList.module.css';
import { selectAllCampers } from '../../redux/camper/selectors.js';
import CamperItem from '../CamperItem/CamperItem.js';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function CamperList() {
  const items = useSelector(selectAllCampers);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleMore = () => {
    if (visibleCount + 5 >= items.length) {
      toast.success('No more campers to load!');
    }
    setVisibleCount(prevCount => Math.min(prevCount + 5, items.length));
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div>
      <Toaster position="center" reverseOrder={false} />
      {items.length > 0 ? (
        <ul className={css.list}>
          {visibleItems.map(item => {
            return <CamperItem key={item.id} item={item} />;
          })}
        </ul>
      ) : (
        <p>Nothing was found for your request. Please try again.</p>
      )}
      {visibleCount < items.length && (
        <div className={css.btnBlock}>
          <button type="button" className={css.btn} onClick={handleMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
