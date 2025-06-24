import CamperList from '../CamperList/CamperList.js';
import Filters from '../Filters/Filters.js';
import Header from '../Header/Header.js';
import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.wrapper}>
        <Filters />
        <CamperList />
      </div>
    </div>
  );
}
