import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

export const checkMeal = ({ meal }) => {
  if (!meal) {
    notFound();
  }
};

export const generateMetadata = async ({ params }) => {
  const meal = getMeal(params.mealSlug);
  checkMeal(meal);
  return {
    title: meal.title,
    description: meal.summary,
  };
};

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  checkMeal(meal);

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://nextjs-demo-users-image-amir.s3.eu-north-1.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
