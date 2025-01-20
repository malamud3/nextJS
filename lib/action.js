'use server';

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instuctions: formData.get('instuctions'),
    image: formData.get('image'),
    creator: formData.get('creator'),
    creator_email: formData.get('creator_email'),
  };
};
