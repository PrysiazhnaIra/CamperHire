import GoBackBtn from '../GoBackBtn/GoBackBtn';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.block}>
      <h2 className={css.title}>Page not found</h2>
      <GoBackBtn />
    </div>
  );
}
