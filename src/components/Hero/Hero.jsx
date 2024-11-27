import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <button type="button" className={css.btn}>
        View Now
      </button>
    </div>
  );
}
