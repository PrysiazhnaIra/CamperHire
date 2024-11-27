import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.block}>
      <h2 className={css.title}>Page is not Found</h2>
      <button type="button" className={css.btn} onClick={handleBtnClick}>
        Go Back
      </button>
    </div>
  );
}
