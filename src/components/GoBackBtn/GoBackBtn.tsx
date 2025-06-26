import { useNavigate } from 'react-router-dom';
import css from './GoBackBtn.module.css';

interface GoBackBtnProps {}

export default function GoBackBtn({}: GoBackBtnProps) {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <button type="button" className={css.btn} onClick={handleBtnClick}>
        Go Back
      </button>
    </>
  );
}
