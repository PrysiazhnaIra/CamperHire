import GoBackBtn from '../GoBackBtn/GoBackBtn';
import css from './NotFound.module.css';

interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className={css.block}>
      <h2 className={css.title}>Page not found</h2>
      <GoBackBtn />
    </div>
  );
}
