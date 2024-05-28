export type ShowsSchema = {
  headline: string;
  limit: number;
  shows: {
    name: string;
    location: string;
    date: string;
    toDate?: string;
    ticketLink: string;
  }[];
};
