import Header from '../Header/Header.js';
import Hero from '../Hero/Hero.js';

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
