export type ShowsSchema = {
  headline: string;
  shows: {
    name: string;
    location: string;
    date: string;
    ticketLink: string;
  }[];
};
