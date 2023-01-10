export const generateURI = (id: string): string => {
  return id ? `https://image.tmdb.org/t/p/w500${id}` : '';
};
