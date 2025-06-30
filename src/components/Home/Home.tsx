import Header from '../Header/Header';
import Hero from '../Hero/Hero';

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
