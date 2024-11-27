import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.block}>
      <h2 className={css.title}>Page not found</h2>
      <button type="button" className={css.btn} onClick={handleBtnClick}>
        Go Back
      </button>
    </div>
  );
}
