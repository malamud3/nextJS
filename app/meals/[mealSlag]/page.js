import Link from 'next/link';
import classes from './page.module.css';
import Image from 'next/image';

export default function MealDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>TITLE</h1>
          <p className={classes.creator}>
            by <Link href={`mailto:${'EMAIL'}`}>NAME</Link>
          </p>
          <p className={classes.summary}>summary</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: '...' }}
        />
      </main>
    </>
  );
}
