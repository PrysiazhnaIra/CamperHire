import Filters from '../Filters/Filters.jsx';
import Header from '../Header/Header.jsx';
import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.wrapper}>
        <Filters />
      </div>
    </div>
  );
}
