import { useNavigate } from 'react-router-dom';
import css from './Hero.module.css';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/catalog');
  };
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <button type="button" className={css.btn} onClick={handleBtnClick}>
        View Now
      </button>
    </div>
  );
}
