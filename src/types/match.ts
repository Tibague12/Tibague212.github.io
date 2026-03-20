export type Sport = 'Football' | 'Handball' | 'Volleyball';

export interface Match {
  id: string;
  title: string;
  sport: Sport;
  date: string;
  time: string;
  location: string;
  city: string;
  price: number;
  image: string;
  organizer: string;
}
