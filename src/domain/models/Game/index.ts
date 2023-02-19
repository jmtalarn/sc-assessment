export type Game = {
  id: number;
  cover?: { url: string };
  firstReleaseDate?: number;
  name: string;
  slug: string;
  summary: string;
  rating?: number;
  genres: { name: string }[];
};
