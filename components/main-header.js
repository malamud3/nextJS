import Link from 'next/link';
import logoImg from '@/assets/logo.png';

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it"></img>
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link herf="/meals">Browe Meals</Link>
          </li>
          <li>
            <Link herf="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
