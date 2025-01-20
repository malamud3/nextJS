'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from './meals';

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instuctions: formData.get('instuctions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };
  await saveMeal(meal);
  redirect('/meals');
};
