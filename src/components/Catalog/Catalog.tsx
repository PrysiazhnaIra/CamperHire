import CamperList from '../CamperList/CamperList';
import Filters from '../Filters/Filters';
import Header from '../Header/Header';
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
