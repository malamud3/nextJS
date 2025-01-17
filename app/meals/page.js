import Link from 'next/link';

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Meals</h1>
      <p>
        <Link href="/..">back</Link>
      </p>
      <p>
        <Link href="meals/share">share</Link>
      </p>
      <p>
        <Link href="meals/meal-1">meal-1</Link>
      </p>
    </main>
  );
}
