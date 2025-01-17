import Link from 'next/link';

export default function Meal() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Meal</h1>
      <p>
        <Link href="/..">back</Link>
      </p>
    </main>
  );
}
